  /*
  Xeptrix -  A library for converting HTML to RTF

  RtfDocumentBuilder class

  /src/classes/RtfDocumentBuilder.class.ts
*/

import { HtmlToRtfParser } from './HtmlToRtfParser.class';

// Rtf Document Builder
class RtfDocumentBuilder implements RtfBuilder {
  private components: RtfComponent[] = [];

  constructor(private htmlToRtfParser: HtmlToRtfParser) {
    this.components.push(
      new RtfHeader(),
      new RtfInfoGroup(),
      new RtfContent(htmlToRtfParser),
      new RtfFooter()
    );
  }

  build(): string {
    return this.components.map((component) => component.toString()).join('');
  }
}


