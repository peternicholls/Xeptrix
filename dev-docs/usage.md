
# Documentation and usage:

The `HtmlToRtfConverter` class provides a simple and extensible way to convert HTML with styling to RTF format. The class has one public method `convert()` that performs the conversion and returns the resulting RTF string.

To use the `HtmlToRtfConverter` class, follow these steps:

1. Import the class in your TypeScript file.
2. Instantiate the class with the input HTML string.
3. Call the `convert()` method on the instance to perform the conversion and retrieve the RTF string.

Example:

```typescript
// Import the HtmlToRtfConverter class
// (Assuming the class is in a separate file named 'HtmlToRtfConverter.ts')
import { HtmlToRtfConverter } from './HtmlToRtfConverter';

// Define the input HTML string
const inputHtml = `
  <p style="color: rgb(255, 0, 0); font-size: 18px;">
    <b>Hello,</b> this is an <i>example</i> of a
    <u>simple HTML</u> document with <b>styling</b>.
  </p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
`;

// Instantiate the converter
const converter = new HtmlToRtfConverter(inputHtml);

// Convert the input HTML to RTF
const rtfOutput = converter.convert();

// Print the RTF output
console.log(rtfOutput);
```

This code will generate an RTF string with the appropriate formatting and styling based on the input HTML string.

The current implementation covers basic HTML tags (e.g., <b>, <i>, <u>, <p>, <ul>, and <li>) and CSS styling (e.g., color and font-size). The code is designed to be extensible, allowing for the addition of more HTML tags and CSS properties as needed.

The code above adds support for table-related tags (<table>, <tr>, and <td>) and the width attribute on table cells.

Here is an example of how to use the modified HtmlToRtfConverter class to convert an HTML table to an RTF table:
```typescript
const inputHtml = `
  <table>
    <tr>
      <td width="100">Column 1</td>
      <td width="200">Column 2</td>
    </tr>
    <tr>
      <td width="100">Row 2</td>
      <td width="200"><b>Row 2, Column 2</b></td>
    </tr>
  </table>
`;

const converter = new HtmlToRtfConverter(inputHtml);
const rtfOutput = converter.convert();
console.log(rtfOutput);
```

```typescript
const inputHtml = `
  <p style="font-family: 'Times New Roman'; font-size: 18px; text-align: center;">
    <span style="font-weight: bold; text-decoration: underline;">Hello,</span> this is an <i>example</i> of a
    <u>simple HTML</u> document with <b>advanced CSS styling</b>.
  </p>
  <table>
    <tr>
      <td style="background-color: rgb(255, 255, 200);" width="100">Column 1</td>
      <td style="background-color: rgb(200, 255, 200);" width="200">Column 2</td>
    </tr>
    <tr>
      <td style="background-color: rgb(200, 200, 255);" width="100">Row 2</td>
      <td style="background-color: rgb(255, 200, 200);" width="200"><b>Row 2, Column 2</b></td>
    </tr>
  </table>
`;

const converter = new HtmlToRtfConverter(inputHtml);
const rtfOutput = converter.convert();
console.log(rtfOutput);
```

Now you can use the custom syntax highlighter with the HtmlToRtfConverter class:

```typescript
const inputHtml = `
  <pre>
    function helloWorld() {
      console.log('Hello, World!');
    }
  </pre>
`;

const syntaxHighlighter = new JavaScriptKeywordHighlighter();
const converter = new HtmlToRtfConverter(inputHtml, syntaxHighlighter);
const rtfOutput = converter.convert();
console.log(rtfOutput);
```

The example above will highlight JavaScript keywords in blue. Keep in mind that this is a very basic example, and real-world syntax highlighters will be much more complex.