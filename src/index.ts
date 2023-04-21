/*
  Xeptrix
  A library for converting HTML to RTF
  /src/HtmlToRtfConverter.ts
*/
import { RtfColor } from './classes/RtfColor.class';
import { RtfFont } from './classes/RtfFont.class';
import { RtfBorder } from './classes/RtfBorder.class';
import { RtfAlignment } from './classes/RtfAlignment.class';
import { RtfStyle } from './classes/RtfStyle.class';

import { Sharp } from 'sharp';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

interface SyntaxHighlighter {
  highlight(code: string): string;
}

class DefaultSyntaxHighlighter implements SyntaxHighlighter {
  highlight(code: string): string {
    return code;
  }
}

class JavaScriptKeywordHighlighter implements SyntaxHighlighter {
  private keywords = [
    'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete',
    'do', 'else', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in',
    'instanceof', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var',
    'void', 'while', 'with', 'yield'
  ];

  highlight(code: string): string {
    // Simple regex-based keyword highlighting for demonstration purposes
    const keywordRegex = new RegExp(`\\b(${this.keywords.join('|')})\\b`, 'g');
    return code.replace(keywordRegex, '<span style="color: blue;">$&</span>');
  }
}

class HtmlToRtfConverter {
  private syntaxHighlighter: SyntaxHighlighter;
  private color: RtfColor;
  private border: RtfBorder;
  private font: RtfFont;
  private currentColorIndex: number;

  constructor(private html: string, syntaxHighlighter?: SyntaxHighlighter) {
    this.syntaxHighlighter = syntaxHighlighter || new DefaultSyntaxHighlighter(); // implement better highlighting with selectors
    this.html = html;
    this.color = new RtfColor();
    this.border = new RtfBorder(this.color);
    this.font = new RtfFont();
    this.currentColorIndex = 0;
  }

  public convert(): string {
    const rtfContent = this.processHtml(this.html);
    const rtfHeader = this.generateRtfHeader();

    return `${rtfHeader}${rtfContent} \\par}`;
  }

  private generateRtfHeader(): string {
    const colorDefinition = this.color.buildColorTableDefinition();

    return `{\\rtf1\\ansi\\deff0\\deflang1033 ${colorDefinition} {\\fonttbl{\\f0\\fnil\\fcharset0 Arial;}}{\\*\\generator HtmlToRtfConverter;}\\viewkind4\\uc1\\pard\\sa200\\sl276\\slmult1\\lang9\\fs22 `;
  }


  private processHtml(html: string, depth: number = 0): string  {
    let rtfContent = '';
    // In html, replace newlines and spaces with placeholders to preserve them
    html = html.replace(/\r?\n/g, '{newline}').replace(/ /g, '{space}');

    const elements = this.extractTagsAndAttributes(html);
    for (const element of elements) {
      const { tag, attributes, content } = element;
      let rtfElement = this.processTag(tag, content, depth);
      rtfElement = this.applyAttributesToRtf(rtfElement, attributes, depth);
      rtfContent += rtfElement;
    }
    // Replace placeholders with RTF commands for newlines and spaces
    rtfContent = rtfContent.replace(/{newline}/g, '\\par').replace(/{space}/g, '\\~');

    return rtfContent;
  }

  private async processSvg(svgContent: string): Promise<string> {
    // Implement SVG to PNG conversion
    return '';
  }

  private async processImage(attributes: Record<string, string>): Promise<string> {
    // Implement image processing
    return '';
  }

  private extractTagsAndAttributes(html: string): Array<{ tag: string; attributes: Record<string, string>; content: string }> {
    const elements: Array<{ tag: string; attributes: Record<string, string>; content: string }> = [];
    const tagRegex = /<([^>]+)>([^<]*)<\/[^>]+>/g;
    let match;

    while ((match = tagRegex.exec(html)) !== null) {
      const tagAndAttributes = match[1].trim().split(/\s+/);
      const tag = tagAndAttributes.shift()!;
      const attributes: Record<string, string> = {};

      for (const attribute of tagAndAttributes) {
        const [attrName, attrValue] = attribute.split('=');
        attributes[attrName] = attrValue.replace(/"/g, '');
      }

      elements.push({ tag, attributes, content: match[2] });
    }

    return elements;
  }

  private processTag(tag: string, content: string, depth: number): string {
    const nestedContent = this.processHtml(content, depth + 1);

    switch (tag.toLowerCase()) {
      case 'b':
        return `\\b ${content} \\b0`;
      case 'i':
        return `\\i ${content} \\i0`;
      case 'u':
        return `\\ul ${content} \\ulnone`;
      case 'p':
        return `\\par ${content}`;
      case 'ul':
        return depth === 0 ? `\\pard\\plain\\ql ${nestedContent} \\pard` : `\\li720 ${nestedContent}`;
      case 'li':
        return `\\bullet\\tab ${nestedContent}\\par`;
      case 'br':
        return '\\line ';
      case 'table':
        return `\\trowd ${nestedContent} \\row`;
      case 'tr':
        return `${nestedContent}\\row`;
      case 'td':
        return `\\pard\\intbl ${nestedContent} \\cell`;
      case 'pre':
        const highlightedContent = this.syntaxHighlighter.highlight(content);
        const rtfEscapedContent = this.escapeRtfSpecialChars(highlightedContent);
        return `\\pard\\nowidctlpar\\fi720\\f1\\fs20 ${rtfEscapedContent} \\pard\\fi0\\f0\\fs24`;
      case 'strong':
        return `\\b ${nestedContent}\\b0 `;
      case 'em':
        return `\\i ${nestedContent}\\i0 `;
      case 'u':
        return `\\ul ${nestedContent}\\ulnone `;
      // case 'svg':
      //   return await this.processSvg(content);
      // case 'img':
      //   return await this.processImage(attributes);
      default:
        return nestedContent;
    }
  }

  private escapeRtfSpecialChars(text: string): string {
    return text.replace(/[{}\\]/g, '\\$&');
  }

  private applyAttributesToRtf(rtf: string, attributes: Record<string, string>, depth: number): string {
    for (const [attrName, attrValue] of Object.entries(attributes)) {
      rtf = this.applyWidthAttributeToRtf(rtf, attrName, attrValue);
    }

    rtf = this.applyLinkAttributesToRtf(rtf, attributes);
    rtf = this.applyStyleAttributesToRtf(rtf, attributes);
    rtf = this.applyListAttributesToRtf(rtf, attributes, depth);

    return rtf;
  }

  private applyWidthAttributeToRtf(rtf: string, attrName: string, attrValue: string): string {
    if (attrName.toLowerCase() === 'width') {
      const width = parseInt(attrValue, 10);
      if (!isNaN(width)) {
        rtf = `\\cellx${width * 20} ${rtf}`; // Assumes a default ratio of 20 twips per pixel
      }
    }

    return rtf;
  }

  private applyLinkAttributesToRtf(rtf: string, attributes: Record<string, string>): string {
    const href = attributes['href'];
    if (href) {
      const escapedHref = this.escapeRtfSpecialChars(href);
      rtf = `\\field{\\*\\fldinst HYPERLINK "${escapedHref}"}{\\fldrslt\\ul ${rtf}}\\ulnone `;
    }

    return rtf;
  }

  private applyListAttributesToRtf(rtf: string, attributes: Record<string, string>, depth: number): string {
    const listType = attributes['data-list-type'];
    if (listType) {
      const isOrdered = listType === 'ol';
      if (isOrdered) {
        rtf = `\\fi-360\\li${720 * depth} \\ilvl${depth - 1}\\i\\fs20 ${rtf}`;
      } else {
        rtf = `\\fi-360\\li${720 * depth} \\bullet\\fs20 ${rtf}`;
      }
    }

    return rtf;
  }

  private applyStyleAttributesToRtf(rtf: string, attributes: Record<string, string>): string {
    let styleCommands = '';

    for (const key in attributes) 
    {
      const value = attributes[key];
      const styleCode = RtfStyle.getRtfStyleCode(key, value);
      if (styleCode) 
      {
        styleCommands += styleCode;
      } else {
        switch (key) 
        {
          case 'font-size':
            styleCommands += this.font.getRtfFontSizeCode(value);
            break;
          case 'font-family':
            styleCommands += this.font.getRtfFontFamilyCode(value);
            break;
          case 'text-align':
            styleCommands += RtfAlignment.getRtfAlignmentCode(value) ?? '';
            break;
          case 'color':
            const colorComponents = this.color.parseColor(value);
            if (colorComponents) {
              const [r, g, b] = colorComponents;
              const colorIndex = this.color.addColor([r, g, b]);
              styleCommands += `\\cf${colorIndex} `;
            }
            break;
          case 'background-color':
            const bgColorComponents = this.color.parseColor(value);
            if (bgColorComponents) {
              const [r, g, b] = bgColorComponents;
              const bgColorIndex = this.color.addColor([r, g, b]);
              styleCommands += `\\highlight${bgColorIndex} `;
            }
            break;
          case 'border':
            // You'll need to implement a method to handle border styles and add the appropriate RTF commands
            const borderCommands = this.border.getBorderCommands(value);
            if (borderCommands) {
              styleCommands += borderCommands;
            }
            break;
        }
      }
    }

    return styleCommands + rtf;
  }

  private escapeSpecialChars(text: string): string {
    return text.replace(/\//g, '\\\\').replace(/{/g, '\\{').replace(/}/g, '\\}').replace(/\t/g, '\\tab ');
  }

}

export default HtmlToRtfConverter;
