/*
  Xeptrix - A library for converting HTML to RTF

  HtmltoRtfParser class

  /src/classes/HtmltoRtfParser.class.ts
*/

import { JSDOM } from 'jsdom';
import { RtfColor } from './RtfColor.class';
import { RtfFont } from './RtfFont.class';

const DEFAULT_FONT_SIZE = 24;
const INDENT_PER_LEVEL = 720;
const HEX_RADIX = 16;
const DECIMAL_RADIX = 10;

type ListContext = {
  depth: number;
  ordered: boolean;
  index: number;
};

type StyleCommands = {
  prefix: string;
  suffix: string;
};

class HtmlToRtfParser {
  private readonly color: RtfColor;
  private readonly font: RtfFont;

  constructor(private readonly html: string) {
    this.color = new RtfColor();
    this.font = new RtfFont();
  }

  public convert(): string {
    const content = this.parse();
    return `${this.generateRtfHeader()}\\widoctrl\\ftnbj \\sectd\\linex0\\endnhere \\pard\\plain \\fs${DEFAULT_FONT_SIZE} ${content}\\par}`;
  }

  public parse(html: string = this.html): string {
    if (!html) {
      return '';
    }

    const dom = new JSDOM(html);
    const root = dom.window.document.body;
    const source = root.childNodes.length > 0 ? root : JSDOM.fragment(html);
    return this.renderChildren(source.childNodes, undefined).trim();
  }

  private generateRtfHeader(): string {
    return `{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033\\deftab720{${this.font.buildFontTableDefinition()}}{${this.color.buildColorTableDefinition()}}`;
  }

  private renderChildren(nodes: NodeListOf<ChildNode> | ChildNode[], listContext: ListContext | undefined): string {
    let output = '';
    nodes.forEach((node) => {
      output += this.renderNode(node, listContext);
    });
    return output;
  }

  private renderNode(node: ChildNode, listContext: ListContext | undefined): string {
    if (node.nodeType === node.TEXT_NODE) {
      return this.escapeRtfSpecialChars(node.textContent || '');
    }

    if (node.nodeType !== node.ELEMENT_NODE) {
      return '';
    }

    return this.processElement(node as Element, listContext);
  }

  private processElement(element: Element, listContext: ListContext | undefined): string {
    const tag = element.tagName.toLowerCase();

    if (['script', 'style', 'head', 'meta', 'link', 'title', 'noscript'].indexOf(tag) !== -1) {
      return '';
    }

    if (tag === 'br') {
      return '\\line ';
    }

    if (tag === 'ul' || tag === 'ol') {
      return this.renderList(element, tag === 'ol', listContext);
    }

    if (tag === 'li') {
      return this.renderListItem(element, listContext);
    }

    const styledContent = this.applyStyles(this.renderChildren(element.childNodes, listContext), element);

    switch (tag) {
      case 'html':
      case 'body':
      case 'main':
        return styledContent;
      case 'p':
      case 'div':
      case 'section':
      case 'article':
      case 'header':
      case 'footer':
      case 'aside':
      case 'nav':
        return `\\pard ${styledContent}\\par `;
      case 'h1':
        return this.renderHeading(styledContent, 48);
      case 'h2':
        return this.renderHeading(styledContent, 40);
      case 'h3':
        return this.renderHeading(styledContent, 32);
      case 'h4':
        return this.renderHeading(styledContent, 28);
      case 'h5':
        return this.renderHeading(styledContent, 24);
      case 'h6':
        return this.renderHeading(styledContent, 20);
      case 'strong':
      case 'b':
        return `{\\b ${styledContent}\\b0}`;
      case 'em':
      case 'i':
        return `{\\i ${styledContent}\\i0}`;
      case 'u':
        return `{\\ul ${styledContent}\\ulnone}`;
      case 's':
      case 'strike':
      case 'del':
        return `{\\strike ${styledContent}\\strike0}`;
      case 'sub':
        return `{\\sub ${styledContent}\\nosupersub}`;
      case 'sup':
        return `{\\super ${styledContent}\\nosupersub}`;
      case 'pre':
        return `\\pard\\f1\\fs20 ${this.escapeRtfSpecialChars(element.textContent || '')}\\f0\\fs${DEFAULT_FONT_SIZE}\\par `;
      case 'code':
        return `{\\f1 ${styledContent}}`;
      case 'blockquote':
        return `\\pard\\li720 ${styledContent}\\par `;
      case 'a':
        return this.renderLink(element, styledContent);
      case 'img':
        return this.renderImage(element);
      case 'table':
        return `\\pard ${styledContent}\\par `;
      case 'tr':
        return `\\trowd ${styledContent}\\row `;
      case 'td':
      case 'th':
        return `\\intbl ${styledContent}\\cell `;
      default:
        return styledContent;
    }
  }

  private renderHeading(content: string, fontSize: number): string {
    return `\\pard\\fs${fontSize}\\b ${content}\\b0\\fs${DEFAULT_FONT_SIZE}\\par `;
  }

  private renderList(element: Element, ordered: boolean, parentContext: ListContext | undefined): string {
    const context: ListContext = {
      depth: parentContext ? parentContext.depth + 1 : 1,
      ordered,
      index: 0,
    };

    return this.renderChildren(element.childNodes, context);
  }

  private renderListItem(element: Element, listContext: ListContext | undefined): string {
    const context = listContext || { depth: 1, ordered: false, index: 0 };
    context.index += 1;
    const marker = context.ordered ? `${context.index}.` : '\\bullet';
    const indent = context.depth * INDENT_PER_LEVEL;
    return `\\pard\\fi-360\\li${indent}\\tx${indent} ${marker}\\tab ${this.renderChildren(element.childNodes, context)}\\par `;
  }

  private renderLink(element: Element, content: string): string {
    const href = element.getAttribute('href');
    if (!href) {
      return content;
    }

    return `{\\field{\\*\\fldinst{HYPERLINK "${this.escapeRtfSpecialChars(href)}"}}{\\fldrslt{\\ul ${content}\\ulnone}}}`;
  }

  private renderImage(element: Element): string {
    const altText = element.getAttribute('alt');
    return altText ? this.escapeRtfSpecialChars(`[Image: ${altText}]`) : '';
  }

  private applyStyles(content: string, element: Element): string {
    const style = this.parseStyleAttribute(element.getAttribute('style'));
    const commands = this.getStyleCommands(style);
    return commands.prefix || commands.suffix ? `{${commands.prefix}${content}${commands.suffix}}` : content;
  }

  private parseStyleAttribute(styleAttribute: string | null): Record<string, string> {
    const styles: Record<string, string> = {};
    if (!styleAttribute) {
      return styles;
    }

    styleAttribute.split(';').forEach((declaration) => {
      const separatorIndex = declaration.indexOf(':');
      if (separatorIndex === -1) {
        return;
      }

      const key = declaration.slice(0, separatorIndex).trim().toLowerCase();
      const value = declaration.slice(separatorIndex + 1).trim();
      if (key && value) {
        styles[key] = value;
      }
    });

    return styles;
  }

  private getStyleCommands(styles: Record<string, string>): StyleCommands {
    let prefix = '';
    let suffix = '';

    if (styles['font-size']) {
      prefix += `\\fs${this.toHalfPoints(styles['font-size'])} `;
      suffix = `\\fs${DEFAULT_FONT_SIZE} ${suffix}`;
    }

    if (styles['font-family']) {
      prefix += `${this.font.getRtfFontFamilyCode(this.cleanFontFamily(styles['font-family']))} `;
      suffix = `\\f0 ${suffix}`;
    }

    if (styles.color) {
      const colorIndex = this.addColor(styles.color);
      if (colorIndex !== undefined) {
        prefix += `\\cf${colorIndex} `;
        suffix = `\\cf0 ${suffix}`;
      }
    }

    if (styles['background-color']) {
      const colorIndex = this.addColor(styles['background-color']);
      if (colorIndex !== undefined) {
        prefix += `\\highlight${colorIndex} `;
        suffix = `\\highlight0 ${suffix}`;
      }
    }

    if (styles['text-align']) {
      const alignment = this.getAlignment(styles['text-align']);
      if (alignment) {
        prefix += `${alignment} `;
      }
    }

    return { prefix, suffix };
  }

  private addColor(color: string): number | undefined {
    const parsedColor = this.parseColor(color);
    return parsedColor ? this.color.addColor(parsedColor) : undefined;
  }

  private parseColor(color: string): [number, number, number] | undefined {
    const normalized = color.trim().toLowerCase();
    const namedColors: Record<string, [number, number, number]> = {
      black: [0, 0, 0],
      blue: [0, 0, 255],
      green: [0, 128, 0],
      red: [255, 0, 0],
      white: [255, 255, 255],
      yellow: [255, 255, 0],
    };

    if (namedColors[normalized]) {
      return namedColors[normalized];
    }

    const shortHexMatch = normalized.match(/^#([0-9a-f]{3})$/);
    if (shortHexMatch) {
      return shortHexMatch[1].split('').map((value) => parseInt(value + value, HEX_RADIX)) as [number, number, number];
    }

    const hexMatch = normalized.match(/^#([0-9a-f]{6})$/);
    if (hexMatch) {
      return [
        parseInt(hexMatch[1].slice(0, 2), HEX_RADIX),
        parseInt(hexMatch[1].slice(2, 4), HEX_RADIX),
        parseInt(hexMatch[1].slice(4, 6), HEX_RADIX),
      ];
    }

    const rgbMatch = normalized.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
    if (rgbMatch) {
      const rgb = rgbMatch.slice(1).map((value) => Math.max(0, Math.min(255, parseInt(value, DECIMAL_RADIX))));
      return rgb as [number, number, number];
    }

    return undefined;
  }

  private getAlignment(alignment: string): string | undefined {
    switch (alignment.trim().toLowerCase()) {
      case 'center':
        return '\\qc';
      case 'right':
        return '\\qr';
      case 'justify':
        return '\\qj';
      case 'left':
        return '\\ql';
      default:
        return undefined;
    }
  }

  private toHalfPoints(size: string): number {
    const numericSize = parseFloat(size);
    if (isNaN(numericSize) || numericSize <= 0) {
      return DEFAULT_FONT_SIZE;
    }

    return Math.round(size.toLowerCase().indexOf('px') !== -1 ? numericSize * 1.5 : numericSize * 2);
  }

  private cleanFontFamily(fontFamily: string): string {
    return fontFamily.split(',')[0].trim().replace(/^['"]|['"]$/g, '') || 'Arial';
  }

  private escapeRtfSpecialChars(text: string): string {
    let escaped = '';

    for (let index = 0; index < text.length; index += 1) {
      const char = text.charAt(index);
      const code = text.charCodeAt(index);

      switch (char) {
        case '\\':
        case '{':
        case '}':
          escaped += `\\${char}`;
          break;
        case '\t':
          escaped += '\\tab ';
          break;
        case '\n':
        case '\r':
          escaped += '\\line ';
          break;
        default:
          escaped += code > 127 ? `\\u${code > 32767 ? code - 65536 : code}?` : char;
      }
    }

    return escaped;
  }
}

export { HtmlToRtfParser };
export default HtmlToRtfParser;
