# **Xeptrix**

[![NPM version](https://img.shields.io/npm/v/xeptrix.svg)](https://npmjs.org/package/xeptrix)
[![License](https://img.shields.io/badge/license-AGPLv3-blue)](https://opensource.org/licenses/AGPLv3)

> **NOT READY FOR PRODUCTION USE!**
>
> While the package is functional, we recommend that you do not use it in production as is. Please check back for progress, or contribute towards the development of this project.

## **About**

Xeptrix is a library for converting HTML to RTF file format. It is written in TypeScript and compiled for both TypeScript and JavaScript usage.

## **Getting Started**

Xeptrix is designed to be simple, yet extensible. It is intended to get you up and running we RTF output from HTML input with the minimum amount of effort, while also allowing you control only the parts of the processes and paramaters that you want to.

### **Prerequisites**

You can use Xeptrix in your project by installing the npm package. You will need to have Node.js and npm installed on your machine. 

Alternatively, you can clone the repository and build the project yourself. You can use Javascript or Typescript to use the library. 

To use typescript, you will need to have typescript installed on your machine. Go to <https://www.typescriptlang.org/download> to download and install typescript.

### **Installing**

To install the package using npm:

```bash
npm install xeptrix
```

### **Basic Usage**

To use Xeptrix, follow these steps:

1. Import the necessary classes and modules in your TypeScript or JavaScript code:

```typescript
// TypeScript:
import { Xeptrix } from 'xeptrix';
// Import other necessary classes or modules as needed

// JavaScript:
import * as Xeptrix from "xeptrix";
// Import other necessary classes or modules as needed
```

2. Create an instance of the Xeptrix class and use its methods to convert HTML to RTF:

```typescript
const xeptrix = new Xeptrix();
const rtfOutput = xeptrix('<p>Hello, World!</p>').convert();
```

## **Development**

This is a work in progress. We are currently working on refactoring the code and adding more features. We welcome contributions to the project.

____________________________________________________________

## **Built With**

- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [NPM](https://www.npmjs.com/) - A package manager for the JavaScript programming language.
- [Jest](https://jestjs.io/) - A JavaScript testing framework.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Prettier](https://prettier.io/) - An opinionated code formatter.
- [TSLint](https://palantir.github.io/tslint/) - A linter for the TypeScript programming language.

We also use the following tools to help us develop and maintain the project:

- [PlantUML](https://plantuml.com/) - A component that allows you to create UML diagrams from a plain text language.
- [VSCode](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS.

## **Versioning**

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this repository.

## **Contributing**

We welcome contributions to the Xeptrix project! To get started, follow these steps:

Fork the repository on GitHub: <https://github.com/peternicholls/Xeptrix.git>

1. Clone your fork to your local machine.
2. Create a new branch for your changes: git checkout -b my-new-feature
3. Make your changes, add tests if necessary, and ensure that existing tests pass.
4. Commit your changes and push them to your fork: git push origin my-new-feature
5. Create a pull request on GitHub, describing your changes and how they improve the project.
6. Please follow the coding style and guidelines in place, and make sure to update the documentation as needed.

## **GitHub**

- Repository: <https://github.com/peternicholls/Xeptrix.git>
- Issues: <https://github.com/peternicholls/Xeptrix/issues>
- Project: <https://github.com/users/peternicholls/projects/4>
- Wiki: <https://github.com/peternicholls/Xeptrix/wiki>

## **NPM**

- Package: <https://www.npmjs.com/package/xeptrix>

## **License**

This project is licensed under the AGPLv3 License. See the [LICENSE](https://github.com/peternicholls/Xeptrix/blob/master/LICENSE) file for more details.

## **Author**

Created by Peter Nicholls <halos_augury_06@icloud.com> 

## **File Structure of the Project**

```javascript
dev-docs\ // Developer documentation
  ...
lib\ // Compiled JavaScript and TypeScript definition files for the npm package
  ...
node_modules\ // Folder containing npm packages
  ...
output\ // Folder containing test RTF output
  test.rtf
src\
  __tests__\ // Unit tests folder for each class/module
    Xeptrix.test.ts // Test file for the main Xeptrix class
    RtfColor.test.ts
    RtfFont.test.ts
  classes\
    components\ // New refactored components for RTF building
      RtfComponent.interface.ts // Interface for RTF components
      RtfContent.class.ts // Represents the content part of an RTF document
      RtfFooter.class.ts // Represents the footer part of an RTF document
      RtfHeader.class.ts // Represents the header part of an RTF document
      RtfInformation.class.ts // Represents the document information part of an RTF document
    elements\ // New refactored elements for RTF building
      HeaderCharset.class.ts // Represents the character set in the header
      HeaderDocumentDefaults.class.ts // Represents document default settings in the header
      HeaderFontTable.class.ts // Represents the font table in the header
      HeaderVersion.class.ts // Represents the RTF version in the header
      RtfElement.interface.ts // Interface for RTF elements
    enums\ // New refactored enums for various RTF settings
      language.enum.ts // Enum for supported languages
    modules\ // Utility and helper modules used throughout the project
  HtmlToRtfParser.class.ts // New refactored class to parse HTML and convert it to RTF
  RtfAlignment.class.ts // Original class for managing RTF alignment
  RtfBorder.class.ts // Original class for managing RTF borders
  RtfBuilder.class.ts // Original class for building an RTF document
  RtfColor.class.ts // Original class for managing RTF colors
  RtfDocumentBuilder.class.ts // New refactored class for building an RTF document
  RtfFont.class.ts // Original class for managing RTF fonts
  RtfStyle.class.ts // Original class for managing RTF styles
  RtfStyleReference.class.ts // Original class for referencing RTF styles
Xeptrix.class.ts // Original main class for converting HTML to RTF

// Other project files
.gitignore
.npmignore
.prettierrc
CHANGELOG // Maintain a changelog for updates and new releases
LICENSE // Include the chosen license for the package
README.md // This file with project documentation and instructions
jest.config.js // Jest configuration for running tests
package.json // npm package file (with lock file)
tsconfig.json // TypeScript configuration file
tslint.json // TSLint configuration for consistent code style
```
