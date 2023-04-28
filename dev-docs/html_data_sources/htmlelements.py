# Open the input file and read its contents
with open('html_elements_list.table.txt', 'r') as f:
    data = f.read()

# Split the data into rows and remove the header row
rows = data.strip().split('\n')[1:]

# Create a list of objects containing the formatted data
objects = []
for row in rows:
    element, description, categories, parents, children, attributes, interface = row.split('\t')
    obj = {
        'element': element,
        'description': description,
        'category': categories,
        'parent': parents,
        'child': children,
        'attributes': attributes,
        'interface': interface
    }
    objects.append(obj)

# Write the array of objects to a TypeScript file
with open('html_elements_tables.ts', 'w') as f:
    f.write('//\n')
    f.write('type HtmlElement = {\n')
    f.write('  element: string;\n')
    f.write('  description: string;\n')
    f.write('  category: string;\n')
    f.write('  parent: string;\n')
    f.write('  child: string;\n')
    f.write('  attributes: string;\n')
    f.write('  interface: string;\n')
    f.write('};\n\n')
    f.write('export const htmlElements: HtmlElement[] = [\n')
    for obj in objects:
        f.write('  {\n')
        f.write('    element: \'' + obj["element"].replace('\'', '\'\'') + '\',\n')
        f.write('    description: \'' + obj["description"].replace('\'', '\'\'') + '\',\n')
        f.write('    category: \'' + obj["category"].replace('\'', '\'\'') + '\',\n')
        f.write('    parent: \'' + obj["parent"].replace('\'', '\'\'') + '\',\n')
        f.write('    child: \'' + obj["child"].replace('\'', '\'\'') + '\',\n')
        f.write('    attributes: \'' + obj["attributes"].replace('\'', '\'\'') + '\',\n')
        f.write('    interface: \'' + obj["interface"].replace('\'', '\'\'') + '\',\n')
        f.write('  },\n')
    f.write('];\n')

print('Done!')
