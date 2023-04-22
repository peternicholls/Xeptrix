/*
  Xeptrix - A library for converting HTML to RTF

  allowedHtmlTags class

  /src/classes/html-tags.module.ts
*/

const HtmlTags = require('./allowedHtmlTags.module');

const DEAFAULT_TAG = {openingRtf: '{\\pard', closingRtf: '\\sb70\\par}'};

export class allowedHtmlTags {

  static getRtfReferenceTag(tagName) {
    let allowedTag;

    tagName = tagName.toLowerCase();
    allowedTag = this.getAllowedTag(tagName);

    if(allowedTag) {
      return tagName == allowedTag.opening ? allowedTag.openingRtf : allowedTag.closingRtf;
    }
    return undefined
  }

  static isKnownTag(tag) {
    let isKnownTag = this.getAllowedTag(tag);
    return Boolean(isKnownTag);
  }

  static getAllowedTag(tag) {
    tag = tag.toLowerCase();
    return HtmlTags.find(knownTag => knownTag.opening == tag || knowedTag.closing == tag);
  }

}
