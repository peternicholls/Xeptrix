# Open the input file and read its contents
with open('Element_interfaces.txt', 'r') as f:
    data = f.read()

# Split the data into rows and remove the header row
rows = data.strip().split('\n')[1:]

# Create a list of objects containing the formatted data
objects = []
for row in rows:
    values = row.split('\t')
    if len(values) >= 2:
        element, interface = values[:2]
        obj = {
            'element': element,
            'interface': interface
        }
        objects.append(obj)

# Write the array of objects to a TypeScript file
with open('html_element_interfaces.ts', 'w') as f:
    f.write('//\n')
    f.write('type ElementInterface = {\n')
    f.write('  element: string;\n')
    f.write('  interface: string;\n')
    f.write('};\n\n')
    f.write('export const elementInterfaces: ElementInterface[] = [\n')
    for obj in objects:
        f.write('  {\n')
        f.write('    element: \'' + obj["element"].replace('\'', '\'\'') + '\',\n')
        f.write('    interface: \'' + obj["interface"].replace('\'', '\'\'') + '\',\n')
        f.write('  },\n')
    f.write('];\n')

print('Done!')
