// RtfFont Class Test - src/__tests__/RtfFont.test.ts

import { RtfFont } from '../classes/RtfFont.class';

describe('RtfFont Class', () => {
  let rtfFont: RtfFont;

  beforeEach(() => {
    rtfFont = new RtfFont();
  });

  test('Constructor adds default font', () => {
    const defaultFontTableDefinition = '\\fonttbl{\\f0\\fswiss Arial;}';
    expect(rtfFont.buildFontTableDefinition()).toBe(defaultFontTableDefinition);
  });

  test('should add font', () => {
    const fontIndex = rtfFont.addFont('Arial', 'fswiss');
    expect(fontIndex).toBe(0);
  });

  test('should add font only once', () => {
    const fontIndex1 = rtfFont.addFont('Arial', 'fswiss');
    const fontIndex2 = rtfFont.addFont('Arial', 'fswiss');
    expect(fontIndex1).toBe(0);
    expect(fontIndex2).toBe(0);
  });

  test('should add multiple fonts', () => {
    const fontIndex1 = rtfFont.addFont('Arial', 'fswiss');
    const fontIndex2 = rtfFont.addFont('Times New Roman', 'froman');
    expect(fontIndex1).toBe(0);
    expect(fontIndex2).toBe(1);
  });

  test('should build font table definition', () => {
    rtfFont.addFont('Arial', 'fswiss');
    rtfFont.addFont('Times New Roman', 'froman');
    const fontTableDefinition = rtfFont.buildFontTableDefinition();
    expect(fontTableDefinition).toBe('\\fonttbl{\\f0\\fswiss Arial;\\f1\\froman Times New Roman;}');
  });

  test('should get RTF font size code', () => {
    expect(rtfFont.getRtfFontSizeCode('12')).toBe('\\fs24');
    expect(rtfFont.getRtfFontSizeCode('16')).toBe('\\fs32');
  });

  test('should get RTF font family code', () => {
    const rtfFontFamilyCode = rtfFont.getRtfFontFamilyCode('Arial');
    expect(rtfFontFamilyCode).toBe('\\f0');
  });

  test('addFont adds new fonts with optional fontFamilyDescriptor', () => {
    const newIndex = rtfFont.addFont('Times New Roman', 'froman');
    expect(newIndex).toBe(1);
    const fontTableDefinition = '\\fonttbl{\\f0\\fswiss Arial;\\f1\\froman Times New Roman;}';
    expect(rtfFont.buildFontTableDefinition()).toBe(fontTableDefinition);
  });

  test('getRtfFontFamilyCode returns correct RTF code and adds font to the table', () => {
    const rtfFontFamilyCode = rtfFont.getRtfFontFamilyCode('Arial');
    expect(rtfFontFamilyCode).toBe('\\f0');
    const fontTableDefintestion = rtfFont.buildFontTableDefinition();
    expect(fontTableDefintestion).toBe('\\fonttbl{\\f0\\fswiss Arial;}');
  });
});
