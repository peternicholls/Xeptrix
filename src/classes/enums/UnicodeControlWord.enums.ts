/*
  Xeptrix- A library for converting HTML to RTF

  Unicode enum
  RTF Unnicode Control Words for RTF document header

  /src/classes/enums/Unicode.enums.ts

/**
 * Unicode RTF Control Words
 * 
 * From Word 97 onward, Word is based on Unicode. Text characters can 
 * be handled using the 16-bit Unicode character-encoding scheme defined
 * in this section. Expressing this text in RTF required a new mechanism, 
 * because until Word 97, RTF handled only 7-bit characters directly and 
 * 8-bit characters encoded as hexadecimal using `\'xx`. The Unicode 
 * mechanism described here can be applied to any RTF destination or body text.
 */
enum UnicodeControlWord {
  /**
   * The \ucN control word is used to specify the number of bytes in a Unicode
   * character. The default value is 1. The value of N must be 1 or 2.
   */ 
  UnicodeSingleByte = '\\uc1',
  UnicodeDoubleByte = '\\uc2',
  
  /**
   * The \uN control word is used to specify that the text following it is
   * to be treated as Unicode text. The text is to be translated into the
   * current ANSI code page, and the ANSI translation is to be used in the
   * RTF output. A mixture of ANSI translation and use of \uN keywords to
   * represent characters which do not have the exact ANSI equivalent.
   */
  UnicodeCharacter = '\\u',

  /**
   * The \ud control word is used to specify that the text following it is
   * to be treated as Unicode text. The text is to be translated into the
   * current ANSI code page, and the ANSI translation is to be used in the
   * RTF output. A mixture of ANSI translation and use of \uN keywords to 
   * represent characters which do not have the exact ANSI equivalent.
   */ 
  UnicodeDestination = '\\ud', // 
  
  /**
   * The \upr control word is used to specify that the text following it is
   * to be treated as Unicode text. The text is to be translated into the
   * current ANSI code page, and the ANSI translation is to be used in the
   * RTF output. 
   * 
   * eg: {\upr{keyword ansi_text}{\*\ud{keyword Unicode_text}}}
   */
  MixedUnicodeAnsi = '\\upr',

  /**
   * The \fbidis is a flag written by RichEdit to indicate a single font is 
   * active instead of a set of associated fonts.
   * 
   * NOT IMPLEMENTED
   */
}

export default UnicodeControlWord;