import sys
import re
from html.parser import HTMLParser

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs= True
        self.text = []
    def handle_data(self, d):
        self.text.append(d)
    def get_data(self):
        return ''.join(self.text)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

try:
    with open('trackpro_product.html', 'r', encoding='utf-8') as f:
        html = f.read()
        # remove script and style tags completely
        html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL)
        text = strip_tags(html)
        text = re.sub(r'\n\s*\n', '\n', text) # remove multiple blank lines
        print(text[:3000])
except Exception as e:
    print("Error:", e)
