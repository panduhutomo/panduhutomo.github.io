import requests
from bs4 import BeautifulSoup
import sys

url = "https://www.franshalsmuseum.nl/en/"
res = requests.get(url)
htmlData = res.content
parsedData = BeautifulSoup(htmlData, "html.parser")

# Print the parsed data with UTF-8 encoding
sys.stdout.buffer.write(parsedData.prettify().encode('utf-8'))