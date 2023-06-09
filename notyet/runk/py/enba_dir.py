import requests
from bs4 import BeautifulSoup
import cssbeautifier

url = 'https://www.franshalsmuseum.nl/wp-content/themes/franshals/build/app.min.css?t=ea8a244ca539a9be02846c5d8322feaca13fa077'

# Fetch the CSS file content from the URL
response = requests.get(url)
css_data = response.text

# Parse the CSS data using BeautifulSoup
parsed_css = BeautifulSoup(css_data, 'html.parser')

# Prettify the CSS data
prettified_css = cssbeautifier.beautify(parsed_css.prettify(formatter=None))

# Write the prettified CSS data to a file
with open('common_prettified.css', 'w', encoding='utf-8') as f:
    f.write(prettified_css)

print('Prettified CSS data written to file.')
