/*
  Xeptrix- A library for converting HTML to RTF

  RtfContent component

  /src/classes/RtfContent.class.ts
*/
import RtfComponent from '../interfaces/RtfComponent.interface';

class RtfContent implements RtfComponent {
  // constructor(private htmlToRtfParser: HtmlToRtfParser) {}

  build(): string {
    // return this.htmlToRtfParser.processHtml();

    return '';
  }
}

export default RtfContent;