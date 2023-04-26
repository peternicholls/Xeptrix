/*
  Xeptrix- A library for converting HTML to RTF

  CharsetControlWord enum
  RTF haracter Set Control Words for RTF document header

  /src/classes/enums/CharsetControlWord.enum.ts

/**
 * Unicode RTF Character Set Control Words
 * 
 * The RTF Spec. supports the following document character sets:
 */
enum CharsetControlWord {
  /**
   * ANSI character set (default)
   */
  Default = '\\ansi',

  /**
   * Macintosh character set
   */
  Mac = '\\mac',

  /**
   * IBM PC character set (code page 437)
   */
  PC = '\\pc',

  /**
   * IBM PS/2 character set (code page 850)
   * Used by IBM Personal System/2 (not implemented in version 1
   * of Microsoft Word for OS/2)
   */
  IBMPS2 = '\\pca',

  /**
   * This keyword represents the ANSI code page which is used to
   * perform the Unicode to ANSI conversion when writing RTF text.
   * N represents the code page in decimal. This is typically set
   * to the default ANSI code page of the run-time environment
   * (for example \ansicpg1252 for U.S. Windows). The reader can
   * use the same ANSI code page to convert ANSI text back to Unicode.
   *
   * This keyword should be emitted in the RTF header section right
   * after the \ansi, \mac, \pc or \pca keyword.
   */
  CharsetControlPage = '\\ansicpg',
}

export default CharsetControlWord;
