/*
  Xeptrix- A library for converting HTML to RTF

  Language enum
  RTF Language codes for RTF document header

  /src/classes/RtfBuilder.interface.ts
*/

/*
 * Unicode RTF Language Codes
 *
 * In RTF, use the \langthatnumber command with the appropriate language
 * code to label a piece of text as a particular language; for example,
 * this paragraph in U.S. English (1033) contains a phrase in French (1036):
 *
 * ```{\pard\lang1033 It had a certain```
 * ```{\i\lang1036 je ne sais quoi}.\par}```
 *
 * This is a partial list of the most common language numbers.
 *
 * Note that the language values are in decimal (as used in RTF's \langthatnumber command).
 * In most Microsoft documentation, the values are (inconveniently) listed in hexadecimal.
 *
 * https://www.oreilly.com/library/view/rtf-pocket-guide/9781449302047/ch04.html
 */
enum Language {
  NotInALanguage = 1024,
  Afrikaans = 1078,
  Arabic = 1025,
  Catalan = 1027,
  Chinese_traditional = 1028,
  Chinese_simplified = 2052,
  Czech = 1029,
  Danish = 1030,
  Dutch = 1031,
  Dutch_belgian = 1043,
  EnglishUK = 2067,
  EnglishUS = 2057,
  Finnish = 1033,
  French = 1035,
  FrenchBelgian = 2060,
  FrenchCanadian = 3084,
  FrenchSwiss = 4108,
  German = 1031,
  GermanSwiss = 2055,
  Greek = 1032,
  Hebrew = 1037,
  Hungarian = 1038,
  Icelandic = 1039,
  Indonesian = 1057,
  Italian = 1040,
  Japanese = 1041,
  Korean = 1042,
  NorwegianBokmal = 1044,
  NorwegianNynorsk = 2068,
  Polish = 1045,
  Portuguese = 2070,
  PortugueseBrazilian = 1046,
  Romanian = 1048,
  Russian = 1049,
  SerboCroatianCyrillic = 1050,
  SerboCroatianLatin = 2074,
  Slovak = 1051,
  Spanish_castilian = 3082,
  Spanish_mexican = 2058,
  Swahili = 1089,
  Swedish = 1053,
  Thai = 1054,
  Turkish = 1055,
  Vietnamese = 1066,
}

export default Language;