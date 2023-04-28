/**
 * @package: Xeptrix
 * @module: HtmlTagTransformer
 * @file: src/classes/HtmlTagTransformer.class.ts
 */
import Xeptrix from './Xeptrix';
import { HtmlTagsToRtfTable } from './modules/SupportedHtmlTags.module';

export class HtmlTagTransformer {
  private xeptrix: Xeptrix;

  constructor(xeptrix: Xeptrix) {
    this.xeptrix = xeptrix;
  }

  transformHtmlToRtf(html: string): string {
    let rtf = html;

    for (const entry of HtmlTagsToRtfTable) {
      const { htmlTag, openingRtf, closingRtf, defaultStyle, customHandler } = entry;

      if (customHandler) {
        rtf = customHandler(html, this.xeptrix.state);
      } else {
        if (openingRtf) {
          rtf = rtf.replace(new RegExp(`<${htmlTag}>`, 'gi'), openingRtf + (defaultStyle || ''));
        }
        if (closingRtf) {
          rtf = rtf.replace(new RegExp(`</${htmlTag}>`, 'gi'), closingRtf);
        }
      }
    }

    // Special handling for self-closing br tags
    rtf = rtf.replace(/<br\s*\/?>/gi, '\\line');

    return rtf;
  }
}