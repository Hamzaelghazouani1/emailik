# Email Scraper

## Using Scrapy framework for Scraping websites

### How to run 

first create .env file on (email_scraper/.env) where you will put your Bing Search Api Key

project Structure:
```shell
email_scraper/
├── email_scraper
│   ├── __init__.py
│   ├── items.py
│   ├── middlewares.py
│   ├── pipelines.py
│   ├── settings.py
│   ├── spiders
│   │   ├── email_spider.py
│   │   ├── __init__.py
│   └── urls.csv
├── .env
├── .gitignore
├── emails.csv
├── README.md
├── requirements.txt
└── scrapy.cfg
```

.env:
```conf
BING_SEARCH_API_KEY=your_api_key
```

then install requirements:
```shell
pip install -r requirements.txt
```

then when finished run the project and it will create two files :

- urls.csv : contains the websites with interest you specified in code
- emails.csv : contains the emails extracted from those websites

to run the project run this command:
```shell
scrapy crawl email_spider
```