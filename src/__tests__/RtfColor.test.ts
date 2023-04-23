// RtfColor Class Test - src/__tests__/RtfColor.test.ts

import { RtfColor } from '../classes/RtfColor.class';

describe('RtfColor Class', () => {
  let rtfColor: RtfColor;

  beforeEach(() => {
    rtfColor = new RtfColor();
  });

  test('buildColorTableDefinition should correctly handle an empty color table', () => {
    const colorTableDefinition = rtfColor.buildColorTableDefinition();
    expect(colorTableDefinition).toBe('\\colortbl;\\red0\\green0\\blue0;');
  });

  test('should parse color', () => {
    const color = rtfColor.parseColor('#FFAABB');
    expect(color).toEqual([255, 170, 187]);
  });

  test('should add color', () => {
    const colorIndex = rtfColor.addColor([255, 170, 187]);
    expect(colorIndex).toBe(1);
  });

  test('should add color only once', () => {
    const colorIndex1 = rtfColor.addColor([255, 170, 187]);
    const colorIndex2 = rtfColor.addColor([255, 170, 187]);
    expect(colorIndex1).toBe(1);
    expect(colorIndex2).toBe(1);
  });

  test('should add multiple colors', () => {
    const colorIndex1 = rtfColor.addColor([255, 170, 187]);
    const colorIndex2 = rtfColor.addColor([0, 255, 128]);
    expect(colorIndex1).toBe(1);
    expect(colorIndex2).toBe(2);
  });

  test('should build color table definition', () => {
    rtfColor.addColor([255, 170, 187]);
    rtfColor.addColor([0, 255, 128]);
    const colorTableDefinition = rtfColor.buildColorTableDefinition();
    expect(colorTableDefinition).toBe(
      '\\colortbl;\\red0\\green0\\blue0;\\red255\\green170\\blue187;\\red0\\green255\\blue128;',
    );
  });

  test('buildColorTableDefinition should include all added colors', () => {
    rtfColor.addColor([255, 170, 187]);
    rtfColor.addColor([0, 255, 128]);
    rtfColor.addColor([26, 43, 60]);

    const colorTableDefinition = rtfColor.buildColorTableDefinition();
    expect(colorTableDefinition).toBe(
      '\\colortbl;\\red0\\green0\\blue0;\\red255\\green170\\blue187;\\red0\\green255\\blue128;\\red26\\green43\\blue60;',
    );
  });

  test('parseColor should correctly parse hexadecimal color strings', () => {
    expect(rtfColor.parseColor('#FFAABB')).toEqual([255, 170, 187]);
    expect(rtfColor.parseColor('#00FF80')).toEqual([0, 255, 128]);
    expect(rtfColor.parseColor('#1A2B3C')).toEqual([26, 43, 60]);
  });

  test('parseColor should handle case-insensitive hexadecimal color strings', () => {
    expect(rtfColor.parseColor('#fFaAbB')).toEqual([255, 170, 187]);
    expect(rtfColor.parseColor('#00ff80')).toEqual([0, 255, 128]);
  });
});
