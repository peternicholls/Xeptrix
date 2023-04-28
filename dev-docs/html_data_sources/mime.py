import re

# Open the input file and read its contents
with open('mime_types.txt', 'r') as f:
    data = f.read()

# Split the data into MIME types and their associated names
mimetypes = re.findall(r'(.+)\n(.+)\n', data)

# Create a list of objects containing the MIME type and name
objects = []
for mimetype, name in mimetypes:
    obj = {
        'name': name
    }
    objects.append(obj)

# Open the output file and write the TypeScript code
with open('mime_types.ts', 'w') as f:
    f.write('const mimeTypes = [\n')
    for obj in objects:
        f.write(f'  {str(obj)},\n')
    f.write('];\n')

print('Done!')
