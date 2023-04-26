
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

The current implementation covers basic HTML tags (e.g., ```<b>, <i>, <u>, <p>, <ul>, ```and``` <li>```) and CSS styling (e.g., color and font-size). The code is designed to be extensible, allowing for the addition of more HTML tags and CSS properties as needed.

The code above adds support for table-related tags (```<table>, <tr>, ```and``` <td>```) and the width attribute on table cells.

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

## RTF Specification
Header:
  Start of File Tag
  RTF Version
  Character Set
  Unicode RTF
    Document Text
    Destination Text
  Font Table
    Font Embedding
    Code Page Support
  File Table
  Color Table
  Style Sheet
  List Table
    Top-level List Properties
    List Levels
      List Override Table
      List Override Level
  Track Changes (Revision Marks)

Content:
  Information Group
  Document Group
    Section Text
    Paragraph Text
    Character Text
    Table Text
    List Text
    Hyperlink Text
  Document Properties [TBC]
  Bookmarks
  Images
    Embedded Bitmap Image Data
    Linked Images
    SVG Images
  Object Data [TBC]
    Publisher Object Data [TBC]
    Drawing Object Data [TBC]
    Other Object Data [TBC]
  Footnotes
  Comments/Annotations
  Fields
  Form Fields
  Index Entries
  Table of Contents Entries
  Bidirectional Language Support

Footer:
  End of File Tag

Now we have a vision of where we are going, we shall now concentrate on the higher level design of our software components. We are going to follow the RTF specification and model classes using UML, so anyone can look at our diagrams and know what the road map for the RTF Builder is.

There are a lot of things that are optional, and things that can also be optionally set/changed. Some things always stay the same. We want to encapsulate the complexity don't we so it is simple to get output straight "out of the box". But also so users of the RTF Builder can also use the full power of the RTF specification if they wish.

We will get in to enforcement of syntax along the way, but at this stage we want to think of our interfaces, components, classes, properties and methods. We know what the reader of an RTF stream is concerned with. 

We can separate the concerns of the RTF Builder into three main areas: 

1. Header:
- Start of File Tag
- RTF Version
- Character Set
- Unicode RTF
  - Document Text
  - Destination Text
- Font Table
  - Font Embedding
  - Code Page Support
- File Table
- Color Table
- Style Sheet
- List Table
  - Top-level List Properties
  - List Levels
    - List Override Table
    - List Override Level
- Track Changes (Revision Marks)

2. Content:
- Information Group
- Document Group
  - Section Text
  - Paragraph Text
  - Character Text
  - Table Text
  - List Text
  - Hyperlink Text
- Document Properties [TBC]
- Bookmarks
- Images
  - Embedded Bitmap Image Data
  - Linked Images
  - SVG Images
- Object Data [TBC]
  - Publisher Object Data [TBC]
  - Drawing Object Data [TBC]
  - Other Object Data [TBC]
- Footnotes
- Comments/Annotations
- Fields
- Form Fields
- Index Entries
- Table of Contents Entries
- Bidirectional Language Support  [TBC]

3. Footer
- End of File Tag

To encapsulate the complexity and create a clear road map for the RTF Builder, it's essential to follow the RTF specification and create a UML diagram representing the components, interfaces, and their relationships. This will make it easier for users to understand the overall structure and use the RTF Builder more efficiently.

Here's a high-level design suggestion:

**RtfElement.interface**: A common interface for all RTF components, ensuring that each component follows a standard set of methods.
    ```generateRtfCode(): string```

**RtfHeader, RtfInfoGroup, RtfContent, RtfFooter**: Classes implementing the ```RtfElement.interface``` interface.
- Each class will be responsible for its part of the RTF document.

**RtfElementFactory**: A factory class to generate instances of RTF components (e.g., Header, Footer, etc.).
- This class will have methods like ```createHeader()```, ```createFooter()```, etc., which return instances of the corresponding classes.

**RtfDocumentBuilder**: A class responsible for coordinating the construction of the RTF document.
- It will have methods like ```addHeader()```, ```addFooter()```, ```addContent()```, etc., to set different components.
It will also have a ```build()``` method that combines all added elements into the final RTF document.

**HtmlToRtfParser**: A class responsible for parsing HTML and transforming it into corresponding RTF components.
- It will have methods like ```parse(html: string)``` and may internally use ```RtfElementFactory``` to create components.
- By defining these components and their responsibilities, you provide a flexible yet powerful system for users to create RTF documents. Users can choose to use the provided HtmlToRtfParser to convert HTML to RTF or directly build their documents using the RtfDocumentBuilder and various RTF components.

With a clear UML diagram based on this design, developers can easily understand the structure and relationships between the components, making it easier to extend or modify the RTF Builder.

```
<header>
  \rtf <charset> \deff? <fonttbl> <filetbl>? <colortbl>? <stylesheet>? <listtables>? <revtbl>?

<document>
  <info>? <docfmt>* <section>+

<footer>

 <header> composed of `\rtf` <charset> `\deff`?  <fonttbl> 
<document> composed of  <dodfmt>* <section>+
<footer> which is `}` termination of the rtf stream
```

Key to symbols:

```
a?	Item a is optional.
a+	One or more repetitions of item a.
a*	Zero or more repetitions of item a.
```
