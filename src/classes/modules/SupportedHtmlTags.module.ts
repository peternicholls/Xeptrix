/**
 * @package: Xeptrix
 * @module: SupportedHtmlTags
 * @file: src/modules/SupportedHtmlTags.module.ts
 */

const STYLE_DEFAULT = {
  h1: '\\fs48\\b',
  h2: '\\fs40\\b',
  h3: '\\fs32\\b',
  h4: '\\fs28\\b',
  h5: '\\fs24\\b',
  h6: '\\fs20\\b',
};

type HtmlTagToRtfEntry = {
  htmlTag: string;
  openingRtf?: string;
  closingRtf?: string;
  defaultStyle?: string;
  customHandler?: (html: string, state: any) => string;
};

export const HtmlTagsToRtfTable: HtmlTagToRtfEntry[] = [
  /**
   * DOCUMENT TAGS
   */
  {
    htmlTag: 'html',
  },
  {
    htmlTag: 'head',
  },
  {
    htmlTag: 'title',
  },
  {
    htmlTag: 'meta',
  },
  {
    htmlTag: 'body',
  },
  {
    htmlTag: 'link',
  },
  /**
   * SECTION TAGS
   */
  {
    htmlTag: 'div',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
  },
  {
    htmlTag: 'span',
    openingRtf: '{',
    closingRtf: '}',
  },
  /**
   * PARAGRAPH TAGS
   */
  {
    htmlTag: 'p',
    openingRtf: '\\pard',
    closingRtf: '\\par',
  },
  /**
   * LINE BREAK TAGS
   */
  {
    htmlTag: 'br',
    openingRtf: '\\line',
  },
  /**
   * HEADER TAGS
   */
  {
    htmlTag: 'h1',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
    defaultStyle: STYLE_DEFAULT.h1,
  },
  {
    htmlTag: 'h2',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
    defaultStyle: STYLE_DEFAULT.h2,
  },
  {
    htmlTag: 'h3',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
    defaultStyle: STYLE_DEFAULT.h3,
  },
  {
    htmlTag: 'h4',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
    defaultStyle: STYLE_DEFAULT.h4,
  },
  {
    htmlTag: 'h5',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
    defaultStyle: STYLE_DEFAULT.h5,
  },
  {
    htmlTag: 'h6',
    openingRtf: '{\\pard',
    closingRtf: '\\sb70\\par}',
    defaultStyle: STYLE_DEFAULT.h6,
  },
  /**
   * STYLE TAGS
   */
  {
    htmlTag: 'b',
    openingRtf: '{\\b',
    closingRtf: '}',
  },
  {
    htmlTag: 'strong',
    openingRtf: '{\\b',
    closingRtf: '}',
  },
  {
    htmlTag: 'i',
    openingRtf: '{\\i',
    closingRtf: '}',
  },
  {
    htmlTag: 'em',
    openingRtf: '{\\b',
    closingRtf: '}',
  },
  {
    htmlTag: 'u',
    openingRtf: '{\\ul',
    closingRtf: '}',
  },
  {
    htmlTag: 's',
    openingRtf: '{\\strike',
    closingRtf: '}',
  },
  {
    htmlTag: 'style',
    openingRtf: '',
    closingRtf: '',
  },
  {
    htmlTag: 'sub',
    openingRtf: '{\\sub',
    closingRtf: '}',
  },
  {
    htmlTag: 'sup',
    openingRtf: '{\\super',
    closingRtf: '}',
  },
  {
    htmlTag: 'font',
    openingRtf: '{',
    closingRtf: '}',
  },
  /**
   * LIST TAGS
   */
  {
    htmlTag: 'ul',
    openingRtf:
      "{{\\*\\pn\\pnlvlblt\\pnf1\\pnindent0{\\pntxtb\\'B7}}\\fi-360\\li720\\sa200\\sl276\\slmult1\\lang22\\f0\\fs22",
    closingRtf: '}',
  },
  {
    htmlTag: 'ol',
    openingRtf:
      '{{\\*\\pn\\pnlvlbody\\pnf0\\pnindent0\\pnstart1\\pndec{\\pntxta.}}\\fi-360\\li720\\sa200\\sl276\\slmult1',
    closingRtf: '}',
  },
  {
    htmlTag: 'li',
    openingRtf: '{\\pntext\\tab}',
    closingRtf: '\\par',
  },
  /**
   * TABLE TAGS
   */
  {
    htmlTag: 'table',
    openingRtf: '{',
    closingRtf: '}',
  },
  {
    htmlTag: 'tbody',
  },
  {
    htmlTag: 'thead',
  },
  {
    htmlTag: 'td',
    openingRtf: '{\\pard\\intbl\\qc',
    closingRtf: '\\cell}',
  },
  {
    htmlTag: 'th',
    openingRtf: '{\\pard\\intbl\\qc',
    closingRtf: '\\cell}',
  },
  {
    htmlTag: 'tr',
    openingRtf: '{\\trowd\\trgaph10',
    closingRtf: '\\row}',
  },
  /**
   * OTHER TAGS
   */
  {
    htmlTag: 'html-space',
    openingRtf: ' ',
  },
  {
    htmlTag: 'mark',
    openingRtf: '{',
    closingRtf: '}',
  },
];
