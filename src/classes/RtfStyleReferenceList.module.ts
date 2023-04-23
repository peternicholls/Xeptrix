/*
  Xeptrix - A library for converting HTML to RTF

  RtfStyleReferenceList class

  /src/classes/RtfStyleReferenceList.module.ts
*/

type StyleReference = {
  [key: string]: string;
};

type StyleEntry = {
  name: string;
  reference: StyleReference;
};

export const styleReferenceList: StyleEntry[] = [
  {
    name: 'font-weight',
    reference: { bold: '\\b ', normal: '\\b0 ' },
  },
  {
    name: 'font-style',
    reference: { italic: '\\i ', normal: '\\i0 ' },
  },
  {
    name: 'text-decoration',
    reference: {
      underline: '\\ul ',
      line_through: '\\strike ',
      none: '\\ulnone \\strike0 ',
    },
  },

  // Add more style attributes here...
];
