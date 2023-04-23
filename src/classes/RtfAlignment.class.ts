/*
  Xeptrix - A library for converting HTML to RTF

  RtfAlignment class

  /src/classes/RtfAlignment.class.ts
*/
interface AlignmentReference {
  name: string;
  reference: string;
}

export class RtfAlignment {
  static alignmentReferenceList: AlignmentReference[] = [
    { name: 'center', reference: '\\qc ' },
    { name: 'left', reference: '\\ql ' },
    { name: 'right', reference: '\\qr ' },
    { name: 'justify', reference: '\\qj ' },
  ];

  static getRtfAlignmentCode(alignment: string): string {
    let alignmentReference: string | undefined;
    RtfAlignment.alignmentReferenceList.forEach((value) => {
      if (value.name === alignment.trim()) alignmentReference = value.reference;
    });
    return alignmentReference ?? '';
  }
}
