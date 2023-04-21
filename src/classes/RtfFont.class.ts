/*
  Xeptrix - A library for converting HTML to RTF

  RtfFont class

  /src/classes/RtfFont.class.ts
*/

export class RtfFont {
  private fontTable: Map<string, number>;
  private currentFontIndex: number;

  constructor() {
    this.fontTable = new Map();
    this.currentFontIndex = -1; // Start from -1, so the first font will have index 0
  }

  addFont(fontFamily: string): number {
    if (this.fontTable.has(fontFamily)) {
      return this.fontTable.get(fontFamily)!;
    }

    const fontIndex = ++this.currentFontIndex;
    this.fontTable.set(fontFamily, fontIndex);
    return fontIndex;
  }

  buildFontTableDefinition(): string {
    const fontDefinitions = Array.from(this.fontTable.entries()).map(
      ([fontFamily, fontIndex]) => `\\f${fontIndex} \\fnil ${fontFamily}`
    );
    return `\\fonttbl ${fontDefinitions.join(';')};`;
  }

  getRtfFontSizeCode(fontSize: string): string {
    const size = parseInt(fontSize, 10) * 2;
    return `\\fs${size} `;
  }

  getRtfFontFamilyCode(fontFamily: string): string {
    const fontIndex = this.addFont(fontFamily);
    return `\\f${fontIndex} `;
  }
}