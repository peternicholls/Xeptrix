/**
 * @package: Xeptrix
 * @module: RtfDocumentBuilder interface
 * @file: src/classes/interfaces/RtfDocumentBuilder.interface.ts
 */

interface RtfDocumentBuilder {
  buildHeader(): string;
  buildDocument(): string;
}

export default RtfDocumentBuilder;
