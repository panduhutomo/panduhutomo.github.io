import requests
from bs4 import BeautifulSoup
import sys
from urllib.parse import urljoin

url = "https://www.smtown.com/artist/musician/10017"
res = requests.get(url)
htmlData = res.content
parsedData = BeautifulSoup(htmlData, "lxml")  # or "html5lib" as the parser

# Extract URLs of external JS files from script tags, validate and convert to absolute URLs
script_tags = parsedData.select('script[src]')
for script_tag in script_tags:
    js_url = script_tag['src']
    # Validate and convert relative URLs to absolute URLs
    if not js_url.startswith('http') and not js_url.startswith('//'):
        js_url = urljoin(url, js_url)
    # Check if the URL is valid
    try:
        if requests.head(js_url).status_code == 200:
            print(js_url)
    except requests.exceptions.RequestException as e:
        print(f"Error occurred while accessing URL: {js_url}. {e}")
