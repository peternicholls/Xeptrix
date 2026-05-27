// HtmlToRtfConverter.test.ts - src/__tests__/HtmlToRtfConverter.test.ts

import Xeptrix from '../index';

describe('HtmlToRtfConverter Class', () => {
  let xeptrix: Xeptrix;

  beforeEach(() => {
    //
  });

  test('should output plain text as a valid RTF document', () => {
    const plainText = 'Hello, World!';
    const rtf = new Xeptrix(plainText).convert();
    expect(rtf).toBe(
      `{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033\\deftab720{\\fonttbl{\\f0\\fswiss Arial;}}{\\colortbl;\\red0\\green0\\blue0;}\\widoctrl\\ftnbj \\sectd\\linex0\\endnhere \\pard\\plain \\fs24 ${plainText}\\par}`,
    );
  });

  test('should output paragraph content', () => {
    const html = `<p>Hello, World!</p>`;
    const rtf = new Xeptrix(html).convert();
    expect(rtf).toContain('\\pard Hello, World!\\par');
  });

  test('should escape RTF control characters and preserve unicode', () => {
    const rtf = new Xeptrix('<p>{Hello}\\World – café</p>').convert();
    expect(rtf).toContain('\\{Hello\\}\\\\World \\u8211? caf\\u233?');
  });

  test('should convert common inline and list tags', () => {
    const rtf = new Xeptrix('<ul><li><strong>One</strong></li><li><em>Two</em></li></ul>').convert();
    expect(rtf).toContain('\\bullet\\tab {\\b One\\b0}\\par');
    expect(rtf).toContain('\\bullet\\tab {\\i Two\\i0}\\par');
  });

  test('should include style colors in the color table', () => {
    const rtf = new Xeptrix('<p style="color: #ff0000">Red</p>').convert();
    expect(rtf).toContain('\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;');
    expect(rtf).toContain('\\cf1 Red\\cf0');
  });
});

// HtmlToRtfConverter.test.ts - src/__tests__/HtmlToRtfConverter.test.ts