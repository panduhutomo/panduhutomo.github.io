import requests
from bs4 import BeautifulSoup
import jsbeautifier

url = "https://www.smtown.com/artist/musician/10017"

# Fetch the webpage content
response = requests.get(url)
html_data = response.text

# Parse the HTML data using BeautifulSoup
parsed_data = BeautifulSoup(html_data, "html.parser")

# Extract the JavaScript code from the parsed HTML structure
scripts = []
for script in parsed_data.find_all("script"):
    script_content = script.string
    if script_content:
        scripts.append(script_content)

# Prettify the extracted JavaScript code using jsbeautifier
beautified_scripts = []
for script in scripts:
    beautified_scripts.append(jsbeautifier.beautify(script))

# Write the prettified JavaScript code to a file
with open("scripts.js", "w", encoding="utf-8") as f:
    f.write("\n".join(beautified_scripts))

print("Prettified JavaScript code written to file.")
