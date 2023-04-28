/*
  Xeptrix- A library for converting HTML to RTF

  Charset enum
  RTF Charset Code Pages for RTF document header

  /src/classes/enums/CharsetCodePage.enum.ts

/**
 * Unicode RTF Charset
 *
 * @ControlWord `\ansicpgN` (where N is the code page number in the enumeration)
 *
 * This keyword represents the ANSI code page that is used to perform the Unicode
 * to ANSI conversion when writing RTF text. N represents the code page in decimal.
 * This is typically set to the default ANSI code page of the run-time environment
 * (for example `\ansicpg1252` for U.S. Windows). The reader can use the same ANSI
 * code page to convert ANSI text back to Unicode. If it appears, this keyword
 * should be emitted in the RTF header section right after the `\ansi`, `\mac`,
 * `\pc` or `\pea` keyword.
 *
 * Note that runs of text marked with a particular font index (see `\fN` in the
 * Font Table section) use the codepage for that font as given by `\cpgN` or
 * implied by `\fcharsetN`, unless they use Unicode RTF described in the Unicode
 * RTF section.
 *
 * The following table lists the ANSI Charset pages that are supported by RTF.
 */
enum CharsetCodePage {
  IbmMultilingual = 850,

  MacRoman = 10000,
  MacJapanese = 10001,
  MacArabic = 10004,
  MacHebrew = 10005,
  MacGreek = 10006,
  MacCyrillic = 10007,
  MacLatin2 = 10029,
  MacTurkish = 10081,

  Windows3_1_US_WesternEurope = 819,
  Windows3_1_EasternEuropean = 1250,
  Windows3_1_Cyrillic = 1251,

  Arabic = 864,
  Arabic2 = 1256,
  ArabicAsmo_708 = 708,
  ArabicAsmo_449_bcon_v4 = 709,
  ArabicTransparent = 710,
  ArabicNafithaEnhanced = 711,
  ArabicTransparentAsmo = 720,
  Assamese = 57006,

  Baltic = 1257,
  Bengali = 57003,

  SimplifiedChinese = 936,
  TraditionalChinese = 950,

  Devanagari = 57002,

  EasternEuropean = 852,
  WesternEuropean = 1252,

  FrenchCanadian = 863,

  Greek = 1253,
  Gujarati = 57010,

  Hebrew = 862,
  Hebrew2 = 1255,

  Japanese = 932,
  Johab = 1361,

  Kannada = 57008,
  Korean = 949,

  Malayalam = 57009,

  Norwegian = 865,

  Oriya = 57007,

  Portuguese = 860,
  Punjabi = 57011,

  SovietUnion = 866, // Russian Cyrillic?

  Tamil = 57004,
  Telugu = 57005,
  Thai = 874,
  Turkish = 1254,

  UnitedStatesIBM = 437,
  UnitedStatesWindows = 1252,

  Vietnamese = 1258,
}

export default CharsetCodePage;
