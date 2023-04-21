// HtmlToRtfConverter.test.ts

import HtmlToRtfConverter from '../index'; // this isn't tidy

describe('HtmlToRtfConverter', () => {
  test('converts plain text', async () => {
    const input = 'Hello, World!';
    const converter = new HtmlToRtfConverter(input);
    const rtf = await converter.convert();

    expect(rtf).toContain('Hello, World!');
  });

  test('converts basic formatting', async () => {
    const input = '<b>Bold</b> <i>Italic</i> <u>Underline</u>';
    const converter = new HtmlToRtfConverter(input);
    const rtf = await converter.convert();

    expect(rtf).toContain('\\b Bold\\b0');
    expect(rtf).toContain('\\i Italic\\i0');
    expect(rtf).toContain('\\ul Underline\\ulnone');
  });

  test('converts links', async () => {
    const input = '<a href="https://example.com">Link</a>';
    const converter = new HtmlToRtfConverter(input);
    const rtf = await converter.convert();

    expect(rtf).toContain('{\\field{\\*\\fldinst{HYPERLINK "https:\\\\example.com"}}{\\fldrslt{\\ul\\cf1 Link}}}');
  });

  test('converts headings', async () => {
    const input = '<h1>Heading 1</h1><h2>Heading 2</h2>';
    const converter = new HtmlToRtfConverter(input);
    const rtf = await converter.convert();

    expect(rtf).toContain('\\pard\\qc\\sa200\\sl276\\slmult1\\b\\fs40 Heading 1\\par');
    expect(rtf).toContain('\\pard\\qc\\sa200\\sl276\\slmult1\\b\\fs28 Heading 2\\par');
  });

  // ... add more test cases ...
});
