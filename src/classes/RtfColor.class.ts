/*
  Xeptrix - A library for converting HTML to RTF

  RtfColor class

  /src/classes/RtfColor.class.ts
*/

export class RtfColor {
  private colorTable: Map<string, number>;
  private currentColorIndex: number;

  constructor() {
    this.colorTable = new Map();
    this.currentColorIndex = -1;

    // Add default color
    this.addColor(this.getDefaultColor());
  }

  addColor(color: [number, number, number]): number {
    const colorKey = color.join(',');

    if (this.colorTable.has(colorKey)) {
      return this.colorTable.get(colorKey)!;
    }

    const colorIndex = ++this.currentColorIndex;
    this.colorTable.set(colorKey, colorIndex);
    return colorIndex;
  }

  buildColorTableDefinition(): string {
    const colorDefinitions = Array.from(this.colorTable.keys()).map(
      (colorKey) => `\\red${colorKey.split(',')[0]}\\green${colorKey.split(',')[1]}\\blue${colorKey.split(',')[2]}`,
    );
    const colorDefinitionsString = colorDefinitions.join(';');
    return colorDefinitionsString.length > 0 ? `\\colortbl;${colorDefinitionsString};` : `\\colortbl;`;
  }

  parseColor(colorString: string): [number, number, number] {
    // const color = parseInt(colorString.substr(1), 16);
    // const red = (color >> 16) & 0xFF;
    // const green = (color >> 8) & 0xFF;
    // const blue = color & 0xFF;
    const color = parseInt(colorString.substr(1), 16);
    const red = Math.floor(color / 16 ** 4) % 256;
    const green = Math.floor(color / 16 ** 2) % 256;
    const blue = color % 256;

    return [red, green, blue];
  }

  getDefaultColor(): [number, number, number] {
    return [0, 0, 0];
  }
}

/*
private parseColor(color: string): number | null {
  if (!color) {
    return null;
  }
  let colorRgb: [number, number, number] | null = null;

  // Check for rgb() format
  const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (rgbMatch) {
    colorRgb = [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
  } else {
    // Check for #RRGGBB format
    const hexMatch = color.match(/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/);
    if (hexMatch) {
      colorRgb = [
        parseInt(hexMatch[1], 16),
        parseInt(hexMatch[2], 16),
        parseInt(hexMatch[3], 16),
      ];
    }
  }

  if (colorRgb) {
    const colorKey = colorRgb.join(',');

    if (this.color.has(colorKey)) {
      return this.color.get(colorKey)!;
    }

    const colorIndex = ++this.currentColorIndex;
    this.color.set(colorKey, colorIndex);
    return colorIndex;
  }

  return null;
}
*/
