/**
 * @package: Xeptrix
 * @module: HTML Elements Content Catergories
 * @file: src/classes/html_types/html_elements_content_catergories.ts
 */

type HtmlElementContentCatergory = {
  category: string;
  elements: string;
  elementsWithExceptions?: string;
};

export const HtmlElementContentCategory: HtmlElementContentCatergory[] = [
  {
    category: 'Metadata content',
    elements: 'base;link;meta;noscript;script;style;template;title',
  },
  {
    category: 'Flow content',
    elements: 'a;abbr;address;article;aside;audio;b;bdi;bdo;blockquote;br;button;canvas;cite;code;data;datalist;del;details;dfn;dialog;div;dl;em;embed;fieldset;figure;footer;form;h1;h2;h3;h4;h5;h6;header;hgroup;hr;i;iframe;img;input;ins;kbd;label;map;mark;MathMLmath;menu;meter;nav;noscript;object;ol;output;p;picture;pre;progress;q;ruby;s;samp;script;search;section;select;slot;small;span;strong;sub;sup;SVGsvg;table;template;textarea;time;u;ul;var;video;wbr;autonomous custom elements;Text',
    elementsWithExceptions: 'area(if it is a descendant of amapelement);link(if it isallowed in the body);main(if it is ahierarchically correctmainelement);meta(if theitempropattribute is present)',
  },
  {
    category: 'Sectioning content',
    elements: 'article;aside;nav;section',
  },
  {
    category: 'Heading content',
    elements: 'h1;h2;h3;h4;h5;h6;hgroup',
  },
  {
    category: 'Phrasing content',
    elements: 'a;abbr;audio;b;bdi;bdo;br;button;canvas;cite;code;data;datalist;del;dfn;em;embed;i;iframe;img;input;ins;kbd;label;map;mark;MathMLmath;meter;noscript;object;output;picture;progress;q;ruby;s;samp;script;select;slot;small;span;strong;sub;sup;SVGsvg;template;textarea;time;u;var;video;wbr;autonomous custom elements;Text',
    elementsWithExceptions: 'area(if it is a descendant of amapelement);link(if it isallowed in the body);meta(if theitempropattribute is present)',
  },
  {
    category: 'Embedded content',
    elements: 'audio;canvas;embed;iframe;img;MathMLmath;object;picture;SVGsvg;video',
  },
  {
    category: 'Interactive content',
    elements: 'button;details;embed;iframe;label;select;textarea',
    elementsWithExceptions: 'a(if thehrefattribute is present);audio(if thecontrolsattribute is present);img(if theusemapattribute is present);input(if thetypeattribute isnotin theHiddenstate);video(if thecontrolsattribute is present)',
  },
  {
    category: 'Form-associated elements',
    elements: 'button;fieldset;input;label;object;output;select;textarea;img;form-associated custom elements',
  },
  {
    category: 'Listed elements',
    elements: 'button;fieldset;input;object;output;select;textarea;form-associated custom elements',
  },
  {
    category: 'Submittable elements',
    elements: 'button;input;select;textarea;form-associated custom elements',
  },
  {
    category: 'Resettable elements',
    elements: 'input;output;select;textarea;form-associated custom elements',
  },
  {
    category: 'Autocapitalize-inheriting elements',
    elements: 'button;fieldset;input;output;select;textarea',
  },
  {
    category: 'Labelable elements',
    elements: 'button;input;meter;output;progress;select;textarea;form-associated custom elements',
  },
  {
    category: 'Palpable content',
    elements: 'a;abbr;address;article;aside;b;bdi;bdo;blockquote;button;canvas;cite;code;data;del;details;dfn;div;em;embed;fieldset;figure;footer;form;h1;h2;h3;h4;h5;h6;header;hgroup;i;iframe;img;ins;kbd;label;main;map;mark;MathMLmath;meter;nav;object;output;p;picture;pre;progress;q;ruby;s;samp;search;section;select;small;span;strong;sub;sup;SVGsvg;table;textarea;time;u;var;video;autonomous custom elements',
    elementsWithExceptions: 'audio(if thecontrolsattribute is present);dl(if the element\'s children include at least one name-value group);input(if thetypeattribute isnotin theHiddenstate);menu(if the element\'s children include at least onelielement);ol(if the element\'s children include at least onelielement);ul(if the element\'s children include at least onelielement);Textthat is notinter-element whitespace',
  },
  {
    category: 'Script-supporting elements',
    elements: 'script;template',
  },
];
