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

import HtmlToRtfParser from './classes/HtmlToRtfParser.class';
// import ParsedHtmlData from './classes/interfaces/ParsedHtmlData.interface';
import DocumentBuilderFactory from './classes/DocumentBuilderFactory.class';
import RTFDocumentBuilder from './classes/components/RTFDocumentBuilder.class';

class Xeptrix {
  private html: string;

  constructor(html: string) {
    this.html = html;
  }

  public convertHtmlToRtf(): string {
    /* COMMENTED OUT FOR NOW TO AVOID ERRORS
    // Create HtmlToRtfParser instance
    const htmlToRtfParser = new HtmlToRtfParser();

    // Parse the HTML input
    const parsedHtmlData: ParsedHtmlData = htmlToRtfParser.parse(this.html);

    // Create DocumentBuilderFactory instance
    const documentBuilderFactory = new DocumentBuilderFactory();

    // Create RTFDocumentBuilder instance
    const rtfDocumentBuilder: RTFDocumentBuilder = documentBuilderFactory.createDocumentBuilder('rtf') as RTFDocumentBuilder;

    // Generate RTF header and document area
    const rtfHeader = rtfDocumentBuilder.buildHeader(parsedHtmlData);
    // const rtfDocumentArea = rtfDocumentBuilder.buildDocumentArea(parsedHtmlData);

    // Combine header, document area, and braces
    const rtfOutput = `{${rtfHeader}${rtfDocumentArea}}`;
    */
    // return rtfOutput;
    return '';
  }
}

export default Xeptrix;