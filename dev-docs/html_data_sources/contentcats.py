# Open the input file and read its contents
with open('Element_content_categories.txt', 'r') as f:
    data = f.read()

# Split the data into rows and remove the header row
rows = data.strip().split('\n')[1:]

# Create a list of objects containing the formatted data
objects = []
for row in rows:
    values = row.split('\t')
    if len(values) >= 2:
        category, elements = values[:2]
        elements_with_exceptions = values[2] if len(values) > 2 else ''
        obj = {
            'category': category,
            'elements': elements
        }
        if elements_with_exceptions:
            obj['elementsWithExceptions'] = elements_with_exceptions
        objects.append(obj)

# Write the array of objects to a TypeScript file
with open('html_elements_content_catergories.ts', 'w') as f:
    f.write('//\n')
    f.write('type HtmlElementContentCatergory = {\n')
    f.write('  category: string;\n')
    f.write('  elements: string;\n')
    f.write('  elementsWithExceptions?: string;\n')
    f.write('};\n\n')
    f.write('export const htmlElementContentCategories: HtmlElementContentCatergory[] = [\n')
    for obj in objects:
        f.write('  {\n')
        f.write('    category: \'' + obj["category"].replace('\'', '\\\'') + '\',\n')
        f.write('    elements: \'' + obj["elements"].replace('\'', '\\\'') + '\',\n')
        if 'elementsWithExceptions' in obj:
            f.write('    elementsWithExceptions: \'' + obj["elementsWithExceptions"].replace('\'', '\\\'') + '\',\n')
        f.write('  },\n')
    f.write('];\n')

print('Done!')
