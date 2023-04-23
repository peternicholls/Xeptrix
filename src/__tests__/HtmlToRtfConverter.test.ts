// HtmlToRtfConverter.test.ts - src/__tests__/HtmlToRtfConverter.test.ts

import { HtmlToRtfConverter } from '../classes/Xeptrix.class';

describe('HtmlToRtfConverter Class', () => {
  let htmlToRtfConverter: HtmlToRtfConverter;

  beforeEach(() => {
    //
  });

  test('should output plain text', () => {
    const plainText = 'Hello, World!';
    const rtf = new HtmlToRtfConverter(plainText).convert();
    expect(rtf).toBe(
      `{\\rtf1\\ansi\\utf8\\deff0\\deflang1033\\deftab720{\\fonttbl{\\f0\\fswiss Arial;}}{\\colortbl;\\red0\\green0\\blue0;}\\widoctrl\\ftnbj \\sectd\\linex0\\endnhere \\pard\\plain \\fs24 ${plainText}\\par}`,
    );
  });

  test('should output paragraph', () => {
    const html = '<p>Hello, World!</p>';
    const rtf = new HtmlToRtfConverter(html).convert();
    const expected = 'Hello, World!';
    expect(rtf).toBe(
      `{\\rtf1\\ansi\\utf8\\deff0\\deflang1033\\deftab720{\\fonttbl{\\f0\\fswiss Arial;}}{\\colortbl;\\red0\\green0\\blue0;}\\widoctrl\\ftnbj \\sectd\\linex0\\endnhere \\pard\\plain \\fs24 ${expected}\\par}`,
    );
  });
});
