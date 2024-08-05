import scrapy

class EmailScraperItem(scrapy.Item):
    website_url = scrapy.Field()
    email = scrapy.Field()
    interest = scrapy.Field()
