/**
 * @package: Xeptrix
 * @class: Xeptrix facade class
 * @file: src/index.ts
 * @description: This is the facade class entry point for the Xeptrix library
 *
 * @todo: refactor the functionality out of the current Xeptrix class
 *        and move the Xeptrix class in to this file. This will allow
 *        the Xeptrix class to be the facade class to the document
 *        builder via methods such as `convertHtmlToRtf` etc.
 */

import HtmlToRtfParser from './classes/HtmltoRtfParser.class';

class Xeptrix {
  private html: string;

  constructor(html: string) {
    this.html = html;
  }

  public convertHtmlToRtf(): string {
    return new HtmlToRtfParser(this.html).convert();
  }

  public convert(): string {
    return this.convertHtmlToRtf();
  }
}

export { HtmlToRtfParser, Xeptrix };
export default Xeptrix;