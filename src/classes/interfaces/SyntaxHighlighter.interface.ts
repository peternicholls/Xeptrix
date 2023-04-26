/*
  Xeptrix - A library for converting HTML to RTF

  SyntaxHighlighter interface

  /src/classes/interfaces/SyntaxHighlighter.interface.ts
*/

interface SyntaxHighlighter {
  highlight(code: string): string;
}

export default SyntaxHighlighter;
