/**
 * @package: Xeptrix
 * @class: Xeptrix
 * @file: src/classes/Xeptrix.ts
 */
const TWIPS_PER_PIXEL = 20; // 1/1440th of an inch
const INDENT_PER_LEVEL = 720; // 1/2 inch
const DECIMAL_RADIX = 10; // decimal base 10

import { RtfColor } from './RtfColor.class';
import { RtfFont } from './RtfFont.class';
import { RtfBorder } from './RtfBorder.class';
import { RtfAlignment } from './RtfAlignment.class';
import { RtfStyle } from './RtfStyle.class';
import DefaultSyntaxHighlighter from './DefaultSyntaxHighlighter.class';
import { HtmlTagTransformer } from './HtmlTagTransformer.class';
import { HtmlTagsToRtfTable } from './modules/SupportedHtmlTags.module';

class Xeptrix {
  private syntaxHighlighter: DefaultSyntaxHighlighter;
  private color: RtfColor;
  private border: RtfBorder;
  private font: RtfFont;
  public state: any; // You can replace 'any' with a more specific type if you have a defined shape for the state


  constructor(private html: string, syntaxHighlighter?: DefaultSyntaxHighlighter) {
    this.syntaxHighlighter = syntaxHighlighter || new DefaultSyntaxHighlighter(); // implement better highlighting with selectors
    this.html = html;
    this.color = new RtfColor();
    this.border = new RtfBorder(this.color);
    this.font = new RtfFont();
    this.state = {}; // Initialize state as an empty object
  }

  // ------------
  // RTF Building
  // ------------

  public convert(): string {
    const rtfHeader = this.generateRtfHeader();
    const rtfDocument = this.buildDocument();
    const rtfFooter = `\\par}`;
    const rtfFile = `${rtfHeader}${rtfDocument}${rtfFooter}`;

    return rtfFile;
  }

  private buildDocument(): string {
    const info = this.generateInfoGroup(); // pass in metadata

    const contentSetup = `\\widoctrl\\ftnbj \\sectd\\linex0\\endnhere \\pard\\plain`; // spaces are important!

    const defaultFontSize = this.font.getDefaultFontSize(); // 12pt. Make this configurable

    const rtfContent = this.processHtml(this.html);
    // {${info}}
    const document = `${contentSetup} ${defaultFontSize} ${rtfContent}`; // spaces are important!

    return document;
  }

  private generateInfoGroup(): string {
    // An RTF info group is optional, but can be used to store metadata about the document.
    // \\info{\\author John Doe}{\\creatim\\yr1990\\mo7\\dy30\\hr10\\min48}{\\version1}{\\edmins0}{\\nofpages1}{\\nofwords0}{\\nofchars0}{\\vern8351}
    // {\\info{\\title The Panda's Thumb}{\\author Stephen J Gould}{\\keywords science natural history }}
    return ``;
  }

  private generateRtfHeader(): string {
    // This should be a constructor class
    const rtfVersion = `{\\rtf1`;
    const charset = `\\ansi`; // can this be made configurable?
    const unicodeUS = `\\ansicpg1252`;
    const utf8 = `\\utf8`; // what if we want to use a different encoding?
    const defaultFont = `\\deff0`; // can this be made configurable?
    const defaultLanguage = `\\deflang1033`; // can this be made configurable?
    const defaultTabWidth = `\\deftab720`; // can this be made configurable?

    const rtfHeader = `${rtfVersion}${charset}${utf8}${defaultFont}${defaultLanguage}${defaultTabWidth}`;

    const fontTable = this.font.buildFontTableDefinition();

    const fileTable = ``; // eg \filetbl{\*\fname Arial;}{\*\fname Arial;}

    const colorTable = this.color.buildColorTableDefinition();

    const styleSheet = ``; // eg \\stylesheet{\\fs20 \\snext0Normal;}

    const listTable = ``; // eg \\listtable{\\list\\listtemplateid1\\listhybrid{\\listlevel\\levelnfc23\\leveljc0\\levelfollow0\\levelstartat1\\levelold\\levelspace360\\levelindent0{\\leveltext\\'01.\\'00;}{\\levelnumbers;}}{\\listname;}{\\listid1;}}

    const revisionsTable = ``; // eg \\*\\revtbl{\\revtim0}{\\revtim1}

    return `${rtfHeader}{${fontTable}}{${colorTable}}`;
  } // {${fileTable}} // {${styleSheet}} // {${listTable}}{${revisionsTable}}`;

  // ------------
  // HTML Parsing
  // ------------

  private processHtml(html: string, depth: number = 0): string {
    let rtfContent = '';

    // In html, replace newlines and spaces with placeholders to preserve them
    html = html.replace(/\r?\n/g, '{newline}');

    const regex = /(<([^>]+)>([^<]*)<\/[^>]+>)/g;
    const splitContent = html.split(regex);

    splitContent.forEach((part, idx) => {
      if (part.trim() === '') return;

      const match = regex.exec(part);

      if (match) {
        const tagAndAttributes = match[2].trim().split(/\s+/);
        const tag = tagAndAttributes.shift()!;
        const attributes: Record<string, string> = {};

        for (const attribute of tagAndAttributes) {
          const [attrName, attrValue] = attribute.split('=');
          attributes[attrName] = attrValue.replace(/"/g, '');
        }

        let rtfElement = this.processTag(tag, match[3], depth);
        rtfElement = this.applyAttributesToRtf(rtfElement, attributes, depth);
        rtfContent += rtfElement;
      } else {
        rtfContent = this.handleSpaces(this.escapeRtfSpecialChars(part));
      }
    });

    // Replace placeholders with RTF commands for newlines and spaces
    rtfContent = rtfContent.replace(/{newline}/g, '\\par');

    return rtfContent;
  }

  private handleSpaces(text: string): string {
    // return text.replace(/ /g, '\\~');
    return text;
  }

  private async processSvg(svgContent: string): Promise<string> {
    // Implement SVG to PNG conversion
    return '';
  }

  private async processImage(attributes: Record<string, string>): Promise<string> {
    // Implement image processing
    return '';
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

  private escapeRtfSpecialChars(inputText: string): string {
    const escapeText = (text: string) => {
      // Escape {} and \ characters.
      text = text.replace(/[{}\\]/g, '\\$&');

      // Escape / characters.
      text = text.replace(/\//g, '\\\\');

      // Escape { characters.
      text = text.replace(/{/g, '\\{');

      // Escape } characters.
      text = text.replace(/}/g, '\\}');

      // Escape tab characters.
      text = text.replace(/\t/g, '\\tab ');

      return text;
    };

    return escapeText(inputText);
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
      const width = parseInt(attrValue, DECIMAL_RADIX);
      if (!isNaN(width)) {
        // Assumes a default ratio of 20 twips per pixel
        const twipsWidth = width * TWIPS_PER_PIXEL;
        // Use the appropriate RTF command to apply the width. In this example, we'll use the cell width command.
        rtf = `\\cellx${twipsWidth} ${rtf}`;
      }
    }
    return rtf;
  }

  private applyLinkAttributesToRtf(rtf: string, attributes: Record<string, string>): string {
    const href = attributes.href;
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
      const listIndent = INDENT_PER_LEVEL * depth;
      if (isOrdered) {
        rtf = `\\fi-360\\li${listIndent} \\ilvl${depth - 1}\\i\\fs20 ${rtf}`;
      } else {
        rtf = `\\fi-360\\li${listIndent} \\bullet\\fs20 ${rtf}`;
      }
    }
    if (attributes.width) {
      rtf = this.applyWidthAttributeToRtf(rtf, 'width', attributes.width);
    }
    return rtf;
  }


  private applyStyleAttributesToRtf(rtf: string, attributes: Record<string, string>): string {
    let styleCommands = '';

    for (const [key, value] of Object.entries(attributes)) {
      const styleCode = RtfStyle.getRtfStyleCode(key, value);
      if (styleCode) {
        styleCommands += styleCode;
      } else {
        switch (key) {
          case 'font-size':
            styleCommands += this.applyFontSize(value);
            break;
          case 'font-family':
            styleCommands += this.applyFontFamily(value);
            break;
          case 'text-align':
            styleCommands += this.applyTextAlignment(value);
            break;
          case 'color':
            styleCommands += this.applyTextColor(value);
            break;
          case 'background-color':
            styleCommands += this.applyBackgroundColor(value);
            break;
          case 'border':
            styleCommands += this.applyBorder(value);
            break;
        }
      }
    }
    return styleCommands + rtf;
  }

  private applyFontSize(fontSize: string): string {
    return this.font.getRtfFontSizeCode(fontSize);
  }

  private applyFontFamily(fontFamily: string): string {
    return this.font.getRtfFontFamilyCode(fontFamily);
  }

  private applyTextAlignment(alignment: string): string {
    return RtfAlignment.getRtfAlignmentCode(alignment) ?? '';
  }

  private applyTextColor(colorString: string): string {
    const colorComponents = this.color.parseColor(colorString);
    if (colorComponents) {
      const [r, g, b] = colorComponents;
      const colorIndex = this.color.addColor([r, g, b]);
      return `\\cf${colorIndex} `;
    }
    return '';
  }

  private applyBackgroundColor(colorString: string): string {
    const bgColorComponents = this.color.parseColor(colorString);
    if (bgColorComponents) {
      const [r, g, b] = bgColorComponents;
      const bgColorIndex = this.color.addColor([r, g, b]);
      return `\\highlight${bgColorIndex} `;
    }
    return '';
  }

  private applyBorder(border: string): string {
    const borderCommands = this.border.getBorderCommands(border);
    return borderCommands ?? '';
  }

}

export default Xeptrix;
