/*
  Xeptrix - A library for converting HTML to RTF

  RtfAlignment class

  /src/classes/RtfAlignment.class.ts
*/

export class RtfAlignment {
  static alignmentReferenceList = [
    { name: 'center',   reference: '\\qc ' },
    { name: 'left',     reference: '\\ql ' },
    { name: 'right',    reference: '\\qr ' },
    { name: 'justify',  reference: '\\qj ' }
  ];

  static getRtfAlignmentCode(alignment: string): string | undefined {
    let alignmentReference = undefined;
    RtfAlignment.alignmentReferenceList.forEach(value => {
      if(value.name == alignment.trim())
        alignmentReference = value.reference;
    });
    return alignmentReference;
  }
}