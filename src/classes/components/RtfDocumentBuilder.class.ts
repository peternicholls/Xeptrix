/**
 * @package: Xeptrix
 * @module: RtfDocumentBuilder class
 * @file: src/classes/components/RtfDocumentBuilder.class.ts
 */

import RtfDocumentBuilder from '../interfaces/DocumentBuilder.interface';
import RTFHeader from './RtfHeader.class';

class RTFDocumentBuilder implements RtfDocumentBuilder {
  private header: RTFHeader;

  constructor() {
    this.header = new RTFHeader();
  }

  buildHeader(): string {
    return this.header.toString();
  }

  buildDocument(): string {
    // Build the document content and return the string representation
    return '';
  }
}

export default RTFDocumentBuilder;