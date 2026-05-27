import Xeptrix from '../index';

const convert = (html: string): string => new Xeptrix(html).convert();

describe('HtmlToRtfParser v1 coverage', () => {
  test('converts all supported heading levels with expected font sizes', () => {
    const rtf = convert('<h1>One</h1><h2>Two</h2><h3>Three</h3><h4>Four</h4><h5>Five</h5><h6>Six</h6>');

    expect(rtf).toContain('\\pard\\fs48\\b One\\b0\\fs24\\par');
    expect(rtf).toContain('\\pard\\fs40\\b Two\\b0\\fs24\\par');
    expect(rtf).toContain('\\pard\\fs32\\b Three\\b0\\fs24\\par');
    expect(rtf).toContain('\\pard\\fs28\\b Four\\b0\\fs24\\par');
    expect(rtf).toContain('\\pard\\fs24\\b Five\\b0\\fs24\\par');
    expect(rtf).toContain('\\pard\\fs20\\b Six\\b0\\fs24\\par');
  });

  test('converts common block and inline formatting tags', () => {
    const rtf = convert(
      '<div>Block</div><blockquote>Quote</blockquote><p><u>Under</u><s>Strike</s><sub>Sub</sub><sup>Sup</sup></p>',
    );

    expect(rtf).toContain('\\pard Block\\par');
    expect(rtf).toContain('\\pard\\li720 Quote\\par');
    expect(rtf).toContain('{\\ul Under\\ulnone}');
    expect(rtf).toContain('{\\strike Strike\\strike0}');
    expect(rtf).toContain('{\\sub Sub\\nosupersub}');
    expect(rtf).toContain('{\\super Sup\\nosupersub}');
  });

  test('converts links, line breaks, image alt text, and simple tables', () => {
    const rtf = convert(
      '<p><a href="https://example.com?a=1&b=2">Example</a><br><img src="x.png" alt="Diagram"></p><table><tr><th>Name</th><td>Ada</td></tr></table>',
    );

    expect(rtf).toContain('\\field{\\*\\fldinst{HYPERLINK "https://example.com?a=1&b=2"}}{\\fldrslt{\\ul Example\\ulnone}}');
    expect(rtf).toContain('\\line');
    expect(rtf).toContain('[Image: Diagram]');
    expect(rtf).toContain('\\trowd \\intbl Name\\cell \\intbl Ada\\cell \\row');
  });

  test('converts preformatted and inline code using a declared monospace font', () => {
    const rtf = convert('<pre>const x = { value: 1 };</pre><p><code>inline()</code></p>');

    expect(rtf).toContain('\\f1\\fmodern Courier New;');
    expect(rtf).toContain('\\pard\\f1\\fs20 const x = \\{ value: 1 \\};\\f0\\fs24\\par');
    expect(rtf).toContain('{\\f1 inline()}');
  });

  test('declares a monospace font for inline code without a pre block', () => {
    const rtf = convert('<p>Use <code>inline()</code></p>');

    expect(rtf).toContain('\\f1\\fmodern Courier New;');
    expect(rtf).toContain('Use {\\f1 inline()}');
  });

  test('applies inline CSS styles and ignores invalid styles safely', () => {
    const rtf = convert(
      '<p style="font-size: 16px; font-family: Georgia, serif; color: rgb(300, 10, 20); background-color: #0f0; text-align: center">Styled</p><span style="color: not-a-color">Plain</span>',
    );

    expect(rtf).toContain('\\f1\\fnil Georgia;');
    expect(rtf).toContain('\\red255\\green10\\blue20;');
    expect(rtf).toContain('\\red0\\green255\\blue0;');
    expect(rtf).toContain('\\fs24 \\f1 \\cf1 \\highlight2 \\qc Styled\\highlight0 \\cf0 \\f0 \\fs24');
    expect(rtf).toContain('Plain');
  });

  test('handles empty input, html entities, malformed markup, and ignored elements', () => {
    expect(convert('')).toBe(
      '{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033\\deftab720{\\fonttbl{\\f0\\fswiss Arial;}}{\\colortbl;\\red0\\green0\\blue0;}\\widoctrl\\ftnbj \\sectd\\linex0\\endnhere \\pard\\plain \\fs24 \\par}',
    );

    const rtf = convert('<p>Tom &amp; Jerry</p><script>alert("x")</script><style>p{color:red}</style><p><strong>Open');
    expect(rtf).toContain('Tom & Jerry');
    expect(rtf).toContain('{\\b Open\\b0}');
    expect(rtf).not.toContain('alert');
    expect(rtf).not.toContain('color:red');
  });

  test('keeps ordered and nested list numbering independent', () => {
    const rtf = convert('<ol><li>First<ol><li>Nested one</li><li>Nested two</li></ol></li><li>Second</li></ol>');

    expect(rtf).toContain('\\pard\\fi-360\\li720\\tx720 1.\\tab First');
    expect(rtf).toContain('\\pard\\fi-360\\li1440\\tx1440 1.\\tab Nested one\\par');
    expect(rtf).toContain('\\pard\\fi-360\\li1440\\tx1440 2.\\tab Nested two\\par');
    expect(rtf).toContain('\\pard\\fi-360\\li720\\tx720 2.\\tab Second\\par');
  });
});
