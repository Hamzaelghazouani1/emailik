import scrapy
import re
import pandas as pd
import csv
import requests
from dotenv import load_dotenv
import os
from email_scraper.items import EmailScraperItem

load_dotenv()
api_key = os.getenv('BING_SEARCH_API_KEY')

class EmailSpider(scrapy.Spider):
    name = "email_spider"
    url_to_interest = {}

    def fetch_urls(self, interests, output_file='email_scraper/urls.csv'):
        if not api_key:
            raise ValueError("API key not found. Make sure it is set in the .env file.")

        headers = {'Ocp-Apim-Subscription-Key': api_key}
        search_url = "https://api.bing.microsoft.com/v7.0/search"

        # Store results in a dictionary mapping interests to URLs
        interest_to_urls = {interest: [] for interest in interests}

        for interest in interests:
            params = {"q": interest, "textDecorations": True, "textFormat": "HTML"}
            response = requests.get(search_url, headers=headers, params=params)
            response.raise_for_status()
            search_results = response.json()

            for result in search_results.get('webPages', {}).get('value', []):
                interest_to_urls[interest].append(result['url'])

        # Write the results to the CSV file
        with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(['Interest', 'URL'])
            for interest, urls in interest_to_urls.items():
                for url in urls:
                    writer.writerow([interest, url])

        print(f'URLs successfully written to {output_file}')

    def start_requests(self):
        interests = ['Remote Work', 'Fashion', 'Minimalism']
        self.fetch_urls(interests)

        # Read URLs and interests from urls.csv
        urls_df = pd.read_csv('email_scraper/urls.csv')
        for index, row in urls_df.iterrows():
            url = row['URL']
            interest = row['Interest']
            self.url_to_interest[url] = interest
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        url = response.url
        interest = self.url_to_interest.get(url)
        
        # Regex to find email addresses and exclude certain file extensions
        email_pattern = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
        file_extension_pattern = re.compile(r'\.(png|jpg|jpeg|gif|bmp|pdf|doc|docx|xls|xlsx|zip|rar|tar|gz|mp3|mp4|avi|mov|mkv)$', re.IGNORECASE)

        emails = email_pattern.findall(response.text)
        filtered_emails = [email for email in emails if not file_extension_pattern.search(email)]

        for email in filtered_emails:
            item = EmailScraperItem()
            item['website_url'] = url
            item['email'] = email
            item['interest'] = interest
            yield item
