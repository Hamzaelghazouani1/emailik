import pandas as pd

class EmailScraperPipeline:
    def __init__(self):
        self.results = []

    def process_item(self, item, spider):
        self.results.append(item)
        return item

    def close_spider(self, spider):
        df = pd.DataFrame(self.results)
        df.to_csv('emails.csv', index=False)
