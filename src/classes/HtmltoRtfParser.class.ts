/*
  Xeptrix - A library for converting HTML to RTF

  HtmltoRtfParser class

  /src/classes/HtmltoRtfParser.class.ts
*/

class HtmlToRtfParser {
  constructor(private html: string) {
    // ...
  }

  public parse(html: string = this.html, depth: number = 0): string {
    // ...

    return this.escapeRtfSpecialChars(html);
  }

  private processTag(tag: string, content: string, depth: number): string {
    // ...

    return content;
  }

  private escapeRtfSpecialChars(text: string): string {
    // ...

    return text;
  }

  private applyAttributesToRtf(rtf: string, attributes: Record<string, string>, depth: number): string {
    // ...

    return rtf;
  }
}

export default HtmlToRtfParser;
