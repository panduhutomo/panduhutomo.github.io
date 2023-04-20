import requests
import jsbeautifier

url = 'https://www.franshalsmuseum.nl/wp-content/themes/franshals/build/app.min.js?t=ea8a244ca539a9be02846c5d8322feaca13fa077'

# Fetch the JavaScript file content from the URL
response = requests.get(url)
js_data = response.text

# Prettify the JavaScript data
prettified_js = jsbeautifier.beautify(js_data)

# Write the prettified JavaScript data to a file
with open('app_prettified.js', 'w', encoding='utf-8') as f:
    f.write(prettified_js)

print('Prettified JavaScript data written to file.')
