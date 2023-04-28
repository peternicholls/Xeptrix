/**
 * @package: Xeptrix
 * @module: HtmlTagToRtfTransformer
 * @file: src/classes/HtmlTagToRtfTransformer.class.ts
 */

import HtmlTagsToRtfTable from './modules/SupportedHtmlTags.module';

export class HtmlTagToRtfTransformer {

  transformHtmlToRtf(html: string): string {
    let rtf = html;

    for (const entry of HtmlTagsToRtfTable) {
      const { htmlTag, openingRtf, closingRtf, defaultStyle, customHandler } = entry;


        if (openingRtf) {
          rtf = rtf.replace(new RegExp(`<${htmlTag}>`, 'gi'), openingRtf + (defaultStyle || ''));
        }
        if (closingRtf) {
          rtf = rtf.replace(new RegExp(`</${htmlTag}>`, 'gi'), closingRtf);

      }
    }

    // Special handling for self-closing br tags
    rtf = rtf.replace(/<br\s*\/?>/gi, '\\line');

    return rtf;
  }
}