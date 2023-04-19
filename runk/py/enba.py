import requests
from bs4 import BeautifulSoup
import sys
from urllib.parse import urljoin

url = "https://www.smtown.com/artist/musician/10017"
res = requests.get(url)
htmlData = res.content
parsedData = BeautifulSoup(htmlData, "lxml")  # or "html5lib" as the parser

# Extract URLs of external CSS files from link tags, validate and convert to absolute URLs
link_tags = parsedData.select('link[rel="stylesheet"]')
for link_tag in link_tags:
    css_url = link_tag['href']
    # Validate and convert relative URLs to absolute URLs
    if not css_url.startswith('http') and not css_url.startswith('//'):
        css_url = urljoin(url, css_url)
    # Check if the URL is valid
    try:
        if requests.head(css_url).status_code == 200:
            print(css_url)
    except requests.exceptions.RequestException as e:
        print(f"Error occurred while accessing URL: {css_url}. {e}")