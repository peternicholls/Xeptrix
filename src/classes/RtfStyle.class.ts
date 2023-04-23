/*
  Xeptrix - A library for converting HTML to RTF

  RtfStyle class

  /src/classes/RtfStyle.class.ts
*/
import { styleReferenceList } from './RtfStyleReferenceList.module';

export class RtfStyle {
  static getRtfStyleCode(attribute: string, value: string): string | undefined {
    const styleObject = styleReferenceList.find((style) => style.name === attribute);
    if (styleObject) {
      const reference = styleObject.reference[value];
      if (reference) {
        return reference;
      }
    }
    return undefined;
  }
}
