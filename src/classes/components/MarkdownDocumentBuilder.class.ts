/**
 * @package: Xeptrix
 * @module: MarkdownDocumentBuilder class
 * @file: src/classes/components/MarkdownDocumentBuilder.class.ts
 */

import DocumentBuilder from '../interfaces/DocumentBuilder.interface';

class MarkdownDocumentBuilder implements DocumentBuilder {
  buildHeader(): string {
    // Build and return the LaTeX header string representation

    return '';
  }

  buildDocument(): string {
    // Build the document content and return the string representation

    return '';
  }
}

export default MarkdownDocumentBuilder;