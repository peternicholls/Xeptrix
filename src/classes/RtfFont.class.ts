/**
 * @package: Xeptrix
 * @class: RtfFont
 * @file: src/classes/RtfFont.class.ts
 */
const RTF_UNIT = 2; // 1pt = 2 RTF units
const DECIMAL_RADIX = 10; // decimal base 10

export class RtfFont {
  private fontTable: Map<string, { index: number; family: string }>;
  private currentFontIndex: number;

  constructor() {
    this.fontTable = new Map();
    this.currentFontIndex = -1; // Start from -1, so the first font will have index 0

    // Add default font
    this.addFont('Arial', 'fswiss');
  }

  addFont(fontName: string, fontFamilyDescriptor: string = ''): number {
    if (this.fontTable.has(fontName)) {
      return this.fontTable.get(fontName)!.index;
    }

    const fontIndex = ++this.currentFontIndex;
    this.fontTable.set(fontName, { index: fontIndex, family: fontFamilyDescriptor });
    return fontIndex;
  }

  buildFontTableDefinition(): string {
    const fontDefinitions = Array.from(this.fontTable.entries()).map(
      ([fontName, fontData]) => `\\f${fontData.index}\\${fontData.family} ${fontName};`,
    );
    return `\\fonttbl{${fontDefinitions.join('')}}`;
  }

  getDefaultFontSize(): string {
    const defaultSize = 24; // 12pt in RTF units (1pt = 2 RTF units)
    return `\\fs${defaultSize}`;
  }

  getRtfFontSizeCode(fontSize: string): string {
    const size = parseInt(fontSize, DECIMAL_RADIX) * RTF_UNIT; // 1pt = 2 RTF units
    return `\\fs${size}`;
  }

  getRtfFontFamilyCode(fontFamily: string): string {
    const fontIndex = this.addFont(fontFamily);
    return `\\f${fontIndex}`;
  }
}
