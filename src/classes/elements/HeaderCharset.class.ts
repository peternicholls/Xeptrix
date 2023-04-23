/*
  Xeptrix- A library for converting HTML to RTF

  HeaderCharset class
  Sets the charset of the RTF document

  /src/classes/elements/HeaderCharset.class.ts
*/

import { RtfElement } from './RtfElement.interface';

export class HeaderCharset implements RtfElement {
    generateRtfCode(): string {
        return '\\ansi';
    }
}
