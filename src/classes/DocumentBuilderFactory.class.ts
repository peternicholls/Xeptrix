/**
 * @package: Xeptrix
 * @module: DocumentBuilderFactory class
 * @file: src/classes/DocumentBuilderFactory.class.ts
 */

import DocumentBuilder from './interfaces/DocumentBuilder.interface';
import RTFDocumentBuilder from './components/RTFDocumentBuilder.class';
import LaTeXDocumentBuilder from './components/LaTeXDocumentBuilder.class';
import MarkdownDocumentBuilder from './components/MarkdownDocumentBuilder.class';

class DocumentBuilderFactory {
  createDocumentBuilder(format: string): DocumentBuilder {
    switch (format) {
      case 'rtf':
        return new RTFDocumentBuilder();
      case 'latex':
        return new LaTeXDocumentBuilder();
      case 'markdown':
        return new MarkdownDocumentBuilder();
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }
}

export default DocumentBuilderFactory;