/*
  Xeptrix- A library for converting HTML to RTF

  HeaderDocumentsDefault class
  Sets the charset of the RTF document

  /src/classes/elements/HeaderDocumentsDefault.class.ts
*/
import RtfElement from '../interfaces/RtfElement.interface';
import Language from '../enums/Language.enum';

class HeaderDocumentDefaults implements RtfElement {
  defaultFont: number = 0;
  defaultLanguage: number = Language.EnglishUS;

  constructor(defaultFont: number, defaultLanguage: number) {
    this.defaultFont = defaultFont;
    this.defaultLanguage = defaultLanguage;
  }

  generateRtfCode(): string {
    return `\\deff${this.defaultFont} \\deflang${this.defaultLanguage}`;
  }
}
