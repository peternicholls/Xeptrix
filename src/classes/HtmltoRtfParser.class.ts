/*
  Xeptrix - A library for converting HTML to RTF

  HtmltoRtfParser class

  /src/classes/HtmltoRtfParser.class.ts
*/
import SyntaxHighlighter from './interfaces/SyntaxHighlighter.interface';

class HtmlToRtfParser {
  constructor(private html: string, syntaxHighlighter?: SyntaxHighlighter) {
    // ...
  }

  public parse(html: string = this.html, depth: number = 0): string {
    // ...
  }

  private processTag(tag: string, content: string, depth: number): string {
    // ...
  }

  private escapeRtfSpecialChars(text: string): string {
    // ...
  }

  private applyAttributesToRtf(rtf: string, attributes: Record<string, string>, depth: number): string {
    // ...
  }
}

export default HtmlToRtfParser;