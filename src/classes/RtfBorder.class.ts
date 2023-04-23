/*
  Xeptrix - A library for converting HTML to RTF

  RtfBorder class

  /src/classes/RtfBorder.class.ts
*/
import { RtfColor } from './RtfColor.class';

export class RtfBorder {
  private color: RtfColor;

  constructor(colorInstance: RtfColor) {
    this.color = colorInstance;
  }

  getBorderCommands(border: string): string {
    let borderCommands = '';

    const borderRegex = /(\d+)px\s+(\w+)\s+(#[0-9a-fA-F]{6}|[a-zA-Z]+)/;
    const borderMatch = border.match(borderRegex);

    if (borderMatch) {
      const [, width, style, color] = borderMatch;
      const colorComponents = this.color.parseColor(color);

      if (colorComponents) {
        const [r, g, b] = colorComponents;
        const colorIndex = this.color.addColor([r, g, b]);
        borderCommands += `\\brdrs\\brdrw${width}\\brdrcf${colorIndex}`;
      }
    }

    return borderCommands;
  }
}
