# Open the input file and read its contents
with open('interfaces.txt', 'r') as f:
    data = f.read()

# Split the data into a list of items
items = [line.strip() for line in data.split('\n') if line.strip()]

# Create a list of objects containing the formatted items
objects = []
for item in items:
    obj = {
        'name': f'{item}'
    }
    objects.append(obj)

# Write the list of objects to a file
with open('html_interfaces.ts', 'w') as f:
    for item in items:
        obj_str = f"{{\n  name: \"{item}\"\n}},\n"
        f.write(obj_str)