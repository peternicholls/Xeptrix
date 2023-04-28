# Open the input file and read its contents
with open('html_Attributes.txt', 'r') as f:
    data = f.read()

# Split the data into rows and remove the header row
rows = data.strip().split('\n')[1:]

# Create a list of objects containing the formatted data
objects = []
for row in rows:
    values = row.split('\t')
    if len(values) >= 3:
        attribute, element, description_value = values[:3]
        obj = {
            'attribute': attribute,
            'element': element,
            'descriptionValue': description_value
        }
        objects.append(obj)

# Write the array of objects to a TypeScript file
with open('html_attributes.ts', 'w') as f:
    f.write('//\n')
    f.write('type HtmlAttributes = {\n')
    f.write('  attribute: string;\n')
    f.write('  element: string;\n')
    f.write('  descriptionValue: string;\n')
    f.write('};\n\n')
    f.write('export const htmlAttributes: HtmlAttributes[] = [\n')
    for obj in objects:
        f.write('  {\n')
        f.write('    attribute: \'' + obj["attribute"].replace('\'', '\\\'') + '\',\n')
        f.write('    element: \'' + obj["element"].replace('\'', '\\\'') + '\',\n')
        f.write('    descriptionValue: \'' + obj["descriptionValue"].replace('\'', '\\\'') + '\',\n')
        f.write('  },\n')
    f.write('];\n')

print('Done!')
