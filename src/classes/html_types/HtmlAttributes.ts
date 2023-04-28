/**
 * @package: Xeptrix
 * @module: HTML Attributes
 * @file: src/classes/html_types/HtmlAttribute.ts
 */

type HtmlAttribute = {
  attribute: string;
  element: string;
  description: string;
};

export const HtmlAttribute: HtmlAttribute[] = [
  {
    attribute: 'abbr',
    element: 'th',
    description: 'Alternative label to use for the header cell when referencing the cell in other contexts',
  },
  {
    attribute: 'accept',
    element: 'input',
    description: 'Hint for expected file type infile upload controls',
  },
  {
    attribute: 'accept-charset',
    element: 'form',
    description: 'Character encodings to use forform submission',
  },
  {
    attribute: 'accesskey',
    element: 'HTML elements',
    description: 'Keyboard shortcut to activate or focus element',
  },
  {
    attribute: 'action',
    element: 'form',
    description: 'URLto use forform submission',
  },
  {
    attribute: 'allow',
    element: 'iframe',
    description: 'Permissions policyto be applied to theiframe\'s contents',
  },
  {
    attribute: 'allowfullscreen',
    element: 'iframe',
    description: 'Whether to allow theiframe\'s contents to userequestFullscreen()',
  },
  {
    attribute: 'alt',
    element: 'area;img;input',
    description: 'Replacement text for use when images are not available',
  },
  {
    attribute: 'as',
    element: 'link',
    description: '"Potential destinationfor a preload request (forrel="preload" andrel="modulepreload")"',
  },
  {
    attribute: 'async',
    element: 'script',
    description: '"Execute script when available, without blocking while fetching"',
  },
  {
    attribute: 'autocapitalize',
    element: 'HTML elements',
    description: 'Recommended autocapitalization behavior (for supported input methods)',
  },
  {
    attribute: 'autocomplete',
    element: 'form',
    description: 'Default setting for autofill feature for controls in the form',
  },
  {
    attribute: 'autocomplete',
    element: 'input;select;textarea',
    description: 'Hint for form autofill feature',
  },
  {
    attribute: 'autofocus',
    element: 'HTML elements',
    description: 'Automatically focus the element when the page is loaded',
  },
  {
    attribute: 'autoplay',
    element: 'audio;video',
    description: 'Hint that themedia resourcecan be started automatically when the page is loaded',
  },
  {
    attribute: 'blocking',
    element: 'link;script;style',
    description: 'Whether the element ispotentially render-blocking',
  },
  {
    attribute: 'charset',
    element: 'meta',
    description: 'Character encoding declaration',
  },
  {
    attribute: 'checked',
    element: 'input',
    description: 'Whether the control is checked',
  },
  {
    attribute: 'cite',
    element: 'blockquote;del;ins;q',
    description: 'Link to the source of the quotation or more information about the edit',
  },
  {
    attribute: 'class',
    element: 'HTML elements',
    description: 'Classes to which the element belongs',
  },
  {
    attribute: 'color',
    element: 'link',
    description: '"Color to use when customizing a site\'s icon (forrel="mask-icon")"',
  },
  {
    attribute: 'cols',
    element: 'textarea',
    description: 'Maximum number of characters per line',
  },
  {
    attribute: 'colspan',
    element: 'td;th',
    description: 'Number of columns that the cell is to span',
  },
  {
    attribute: 'content',
    element: 'meta',
    description: 'Value of the element',
  },
  {
    attribute: 'contenteditable',
    element: 'HTML elements',
    description: 'Whether the element is editable',
  },
  {
    attribute: 'controls',
    element: 'audio;video',
    description: 'Show user agent controls',
  },
  {
    attribute: 'coords',
    element: 'area',
    description: 'Coordinates for the shape to be created in animage map',
  },
  {
    attribute: 'crossorigin',
    element: 'audio;img;link;script;video',
    description: 'How the element handles crossorigin requests',
  },
  {
    attribute: 'data',
    element: 'object',
    description: 'Address of the resource',
  },
  {
    attribute: 'datetime',
    element: 'del;ins',
    description: 'Date and (optionally) time of the change',
  },
  {
    attribute: 'datetime',
    element: 'time',
    description: 'Machine-readable value',
  },
  {
    attribute: 'decoding',
    element: 'img',
    description: 'Decoding hint to use when processing this image for presentation',
  },
  {
    attribute: 'default',
    element: 'track',
    description: 'Enable the track if no othertext trackis more suitable',
  },
  {
    attribute: 'defer',
    element: 'script',
    description: 'Defer script execution',
  },
  {
    attribute: 'dir',
    element: 'HTML elements',
    description: 'The text directionalityof the element',
  },
  {
    attribute: 'dir',
    element: 'bdo',
    description: 'The text directionalityof the element',
  },
  {
    attribute: 'dirname',
    element: 'input;textarea',
    description: 'Name of form control to use for sending the element\'sdirectionalityinform submission',
  },
  {
    attribute: 'disabled',
    element: 'button;input;optgroup;option;select;textarea;form-associated custom elements',
    description: 'Whether the form control is disabled',
  },
  {
    attribute: 'disabled',
    element: 'fieldset',
    description: '"Whether the descendant form controls, except any insidelegend, are disabled"',
  },
  {
    attribute: 'disabled',
    element: 'link',
    description: 'Whether the link is disabled',
  },
  {
    attribute: 'download',
    element: 'a;area',
    description: '"Whether to download the resource instead of navigating to it, and its filename if so"',
  },
  {
    attribute: 'draggable',
    element: 'HTML elements',
    description: 'Whether the element is draggable',
  },
  {
    attribute: 'enctype',
    element: 'form',
    description: 'Entry listencoding type to use forform submission',
  },
  {
    attribute: 'enterkeyhint',
    element: 'HTML elements',
    description: 'Hint for selecting an enter key action',
  },
  {
    attribute: 'fetchpriority',
    element: 'img;link;script',
    description: 'Sets thepriorityforfetchesinitiated by the element',
  },
  {
    attribute: 'for',
    element: 'label',
    description: 'Associate the label with form control',
  },
  {
    attribute: 'for',
    element: 'output',
    description: 'Specifies controls from which the output was calculated',
  },
  {
    attribute: 'form',
    element: 'button;fieldset;input;object;output;select;textarea;form-associated custom elements',
    description: 'Associates the element with aformelement',
  },
  {
    attribute: 'formaction',
    element: 'button;input',
    description: 'URLto use forform submission',
  },
  {
    attribute: 'formenctype',
    element: 'button;input',
    description: 'Entry listencoding type to use forform submission',
  },
  {
    attribute: 'formmethod',
    element: 'button;input',
    description: 'Variant to use forform submission',
  },
  {
    attribute: 'formnovalidate',
    element: 'button;input',
    description: 'Bypass form control validation forform submission',
  },
  {
    attribute: 'formtarget',
    element: 'button;input',
    description: 'Navigableforform submission',
  },
  {
    attribute: 'headers',
    element: 'td;th',
    description: 'The header cells for this cell',
  },
  {
    attribute: 'height',
    element: 'canvas;embed;iframe;img;input;object;source(inpicture);video',
    description: 'Vertical dimension',
  },
  {
    attribute: 'hidden',
    element: 'HTML elements',
    description: 'Whether the element is relevant',
  },
  {
    attribute: 'high',
    element: 'meter',
    description: 'Low limit of high range',
  },
  {
    attribute: 'href',
    element: 'a;area',
    description: 'Address of thehyperlink',
  },
  {
    attribute: 'href',
    element: 'link',
    description: 'Address of thehyperlink',
  },
  {
    attribute: 'href',
    element: 'base',
    description: 'Document base URL',
  },
  {
    attribute: 'hreflang',
    element: 'a;link',
    description: 'Language of the linked resource',
  },
  {
    attribute: 'http-equiv',
    element: 'meta',
    description: 'Pragma directive',
  },
  {
    attribute: 'id',
    element: 'HTML elements',
    description: 'The element\'sID',
  },
  {
    attribute: 'imagesizes',
    element: 'link',
    description: '"Image sizes for different page layouts (forrel="preload")"',
  },
  {
    attribute: 'imagesrcset',
    element: 'link',
    description: '"Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (forrel="preload")"',
  },
  {
    attribute: 'inert',
    element: 'HTML elements',
    description: 'Whether the element isinert.',
  },
  {
    attribute: 'inputmode',
    element: 'HTML elements',
    description: 'Hint for selecting an input modality',
  },
  {
    attribute: 'integrity',
    element: 'link;script',
    description: 'Integrity metadata used inSubresource Integritychecks[SRI]',
  },
  {
    attribute: 'is',
    element: 'HTML elements',
    description: 'Creates acustomized built-in element',
  },
  {
    attribute: 'ismap',
    element: 'img',
    description: 'Whether the image is a server-side image map',
  },
  {
    attribute: 'itemid',
    element: 'HTML elements',
    description: 'Global identifierfor a microdata item',
  },
  {
    attribute: 'itemprop',
    element: 'HTML elements',
    description: 'Property namesof a microdata item',
  },
  {
    attribute: 'itemref',
    element: 'HTML elements',
    description: 'Referencedelements',
  },
  {
    attribute: 'itemscope',
    element: 'HTML elements',
    description: 'Introduces a microdata item',
  },
  {
    attribute: 'itemtype',
    element: 'HTML elements',
    description: 'Item typesof a microdata item',
  },
  {
    attribute: 'kind',
    element: 'track',
    description: 'The type of text track',
  },
  {
    attribute: 'label',
    element: 'optgroup;option;track',
    description: 'User-visible label',
  },
  {
    attribute: 'lang',
    element: 'HTML elements',
    description: 'Languageof the element',
  },
  {
    attribute: 'list',
    element: 'input',
    description: 'List of autocomplete options',
  },
  {
    attribute: 'loading',
    element: 'iframe;img',
    description: 'Used when determining loading deferral',
  },
  {
    attribute: 'loop',
    element: 'audio;video',
    description: 'Whether to loop themedia resource',
  },
  {
    attribute: 'low',
    element: 'meter',
    description: 'High limit of low range',
  },
  {
    attribute: 'max',
    element: 'input',
    description: 'Maximum value',
  },
  {
    attribute: 'max',
    element: 'meter;progress',
    description: 'Upper bound of range',
  },
  {
    attribute: 'maxlength',
    element: 'input;textarea',
    description: 'Maximumlengthof value',
  },
  {
    attribute: 'media',
    element: 'link;meta;source(inpicture);style',
    description: 'Applicable media',
  },
  {
    attribute: 'method',
    element: 'form',
    description: 'Variant to use forform submission',
  },
  {
    attribute: 'min',
    element: 'input',
    description: 'Minimum value',
  },
  {
    attribute: 'min',
    element: 'meter',
    description: 'Lower bound of range',
  },
  {
    attribute: 'minlength',
    element: 'input;textarea',
    description: 'Minimumlengthof value',
  },
  {
    attribute: 'multiple',
    element: 'input;select',
    description: 'Whether to allow multiple values',
  },
  {
    attribute: 'muted',
    element: 'audio;video',
    description: 'Whether to mute themedia resourceby default',
  },
  {
    attribute: 'name',
    element: 'button;fieldset;input;output;select;textarea;form-associated custom elements',
    description: 'Name of the element to use forform submissionand in theform.elementsAPI',
  },
  {
    attribute: 'name',
    element: 'form',
    description: 'Name of form to use in thedocument.formsAPI',
  },
  {
    attribute: 'name',
    element: 'iframe;object',
    description: 'Name ofcontent navigable',
  },
  {
    attribute: 'name',
    element: 'map',
    description: 'Name ofimage maptoreferencefrom theusemapattribute',
  },
  {
    attribute: 'name',
    element: 'meta',
    description: 'Metadata name',
  },
  {
    attribute: 'name',
    element: 'slot',
    description: 'Name of shadow tree slot',
  },
  {
    attribute: 'nomodule',
    element: 'script',
    description: 'Prevents execution in user agents that supportmodule scripts',
  },
  {
    attribute: 'nonce',
    element: 'HTML elements',
    description: 'Cryptographic nonce used inContent Security Policychecks[CSP]',
  },
  {
    attribute: 'novalidate',
    element: 'form',
    description: 'Bypass form control validation forform submission',
  },
  {
    attribute: 'open',
    element: 'details',
    description: 'Whether the details are visible',
  },
  {
    attribute: 'open',
    element: 'dialog',
    description: 'Whether the dialog box is showing',
  },
  {
    attribute: 'optimum',
    element: 'meter',
    description: 'Optimum value in gauge',
  },
  {
    attribute: 'pattern',
    element: 'input',
    description: 'Pattern to be matched by the form control\'s value',
  },
  {
    attribute: 'ping',
    element: 'a;area',
    description: 'URLsto ping',
  },
  {
    attribute: 'placeholder',
    element: 'input;textarea',
    description: 'User-visible label to be placed within the form control',
  },
  {
    attribute: 'playsinline',
    element: 'video',
    description: 'Encourage the user agent to display video content within the element\'s playback area',
  },
  {
    attribute: 'popover',
    element: 'HTML elements',
    description: 'Makes the element apopoverelement',
  },
  {
    attribute: 'popovertarget',
    element: 'input;button',
    description: '"Targets a popover element to toggle, show, or hide"',
  },
  {
    attribute: 'popovertargetaction',
    element: 'input;button',
    description: '"Indicates whether a targeted popover element is to be toggled, shown, or hidden"',
  },
  {
    attribute: 'poster',
    element: 'video',
    description: 'Poster frame to show prior to video playback',
  },
  {
    attribute: 'preload',
    element: 'audio;video',
    description: 'Hints how much buffering themedia resourcewill likely need',
  },
  {
    attribute: 'readonly',
    element: 'input;textarea',
    description: 'Whether to allow the value to be edited by the user',
  },
  {
    attribute: 'readonly',
    element: 'form-associated custom elements',
    description: '"AffectswillValidate, plus any behavior added by the custom element author"',
  },
  {
    attribute: 'referrerpolicy',
    element: 'a;area;iframe;img;link;script',
    description: 'Referrer policyforfetchesinitiated by the element',
  },
  {
    attribute: 'rel',
    element: 'a;area',
    description: 'Relationship between the location in the document containing thehyperlinkand the destination resource',
  },
  {
    attribute: 'rel',
    element: 'link',
    description: 'Relationship between the document containing thehyperlinkand the destination resource',
  },
  {
    attribute: 'required',
    element: 'input;select;textarea',
    description: 'Whether the control is required forform submission',
  },
  {
    attribute: 'reversed',
    element: 'ol',
    description: 'Number the list backwards',
  },
  {
    attribute: 'rows',
    element: 'textarea',
    description: 'Number of lines to show',
  },
  {
    attribute: 'rowspan',
    element: 'td;th',
    description: 'Number of rows that the cell is to span',
  },
  {
    attribute: 'sandbox',
    element: 'iframe',
    description: 'Security rules for nested content',
  },
  {
    attribute: '      "allow-downloads"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-forms"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-modals"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-orientation-lock"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-pointer-lock"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-popups"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-popups-to-escape-sandbox"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-presentation"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-same-origin"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-scripts"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-top-navigation"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-top-navigation-by-user-activation"',
    element: '',
    description: '',
  },
  {
    attribute: '      "allow-top-navigation-to-custom-protocols"',
    element: '',
    description: '',
  },
  {
    attribute: '',
    element: '',
    description: '',
  },
  {
    attribute: 'scope',
    element: 'th',
    description: 'Specifies which cells the header cell applies to',
  },
  {
    attribute: 'selected',
    element: 'option',
    description: 'Whether the option is selected by default',
  },
  {
    attribute: 'shape',
    element: 'area',
    description: 'The kind of shape to be created in animage map',
  },
  {
    attribute: 'size',
    element: 'input;select',
    description: 'Size of the control',
  },
  {
    attribute: 'sizes',
    element: 'link',
    description: '"Sizes of the icons (forrel="icon")"',
  },
  {
    attribute: 'sizes',
    element: 'img;source',
    description: 'Image sizes for different page layouts',
  },
  {
    attribute: 'slot',
    element: 'HTML elements',
    description: 'The element\'s desired slot',
  },
  {
    attribute: 'span',
    element: 'col;colgroup',
    description: 'Number of columns spanned by the element',
  },
  {
    attribute: 'spellcheck',
    element: 'HTML elements',
    description: 'Whether the element is to have its spelling and grammar checked',
  },
  {
    attribute: 'src',
    element: 'audio;embed;iframe;img;input;script;source(invideooraudio);track;video',
    description: 'Address of the resource',
  },
  {
    attribute: 'srcdoc',
    element: 'iframe',
    description: 'A document to render in theiframe',
  },
  {
    attribute: 'srclang',
    element: 'track',
    description: 'Language of the text track',
  },
  {
    attribute: 'srcset',
    element: 'img;source',
    description: '"Images to use in different situations, e.g., high-resolution displays, small monitors, etc."',
  },
  {
    attribute: 'start',
    element: 'ol',
    description: 'Starting valueof the list',
  },
  {
    attribute: 'step',
    element: 'input',
    description: 'Granularity to be matched by the form control\'s value',
  },
  {
    attribute: 'style',
    element: 'HTML elements',
    description: 'Presentational and formatting instructions',
  },
  {
    attribute: 'tabindex',
    element: 'HTML elements',
    description: '"Whether the element isfocusableandsequentially focusable, and the relative order of the element for the purposes ofsequential focus navigation"',
  },
  {
    attribute: 'target',
    element: 'a;area',
    description: 'Navigableforhyperlinknavigation',
  },
  {
    attribute: 'target',
    element: 'base',
    description: 'Defaultnavigableforhyperlinknavigationandform submission',
  },
  {
    attribute: 'target',
    element: 'form',
    description: 'Navigableforform submission',
  },
  {
    attribute: 'title',
    element: 'HTML elements',
    description: 'Advisory information for the element',
  },
  {
    attribute: 'title',
    element: 'abbr;dfn',
    description: 'Full term or expansion of abbreviation',
  },
  {
    attribute: 'title',
    element: 'input',
    description: 'Description of pattern (when used withpatternattribute)',
  },
  {
    attribute: 'title',
    element: 'link',
    description: 'Title of the link',
  },
  {
    attribute: 'title',
    element: 'link;style',
    description: 'CSS style sheet set name',
  },
  {
    attribute: 'translate',
    element: 'HTML elements',
    description: 'Whether the element is to be translated when the page is localized',
  },
  {
    attribute: 'type',
    element: 'a;link',
    description: 'Hint for the type of the referenced resource',
  },
  {
    attribute: 'type',
    element: 'button',
    description: 'Type of button',
  },
  {
    attribute: 'type',
    element: 'embed;object;source',
    description: 'Type of embedded resource',
  },
  {
    attribute: 'type',
    element: 'input',
    description: 'Type of form control',
  },
  {
    attribute: 'type',
    element: 'ol',
    description: 'Kind of list marker',
  },
  {
    attribute: 'type',
    element: 'script',
    description: 'Type of script',
  },
  {
    attribute: 'usemap',
    element: 'img',
    description: 'Name ofimage mapto use',
  },
  {
    attribute: 'value',
    element: 'button;option',
    description: 'Value to be used forform submission',
  },
  {
    attribute: 'value',
    element: 'data',
    description: 'Machine-readable value',
  },
  {
    attribute: 'value',
    element: 'input',
    description: 'Value of the form control',
  },
  {
    attribute: 'value',
    element: 'li',
    description: 'Ordinal valueof the list item',
  },
  {
    attribute: 'value',
    element: 'meter;progress',
    description: 'Current value of the element',
  },
  {
    attribute: 'width',
    element: 'canvas;embed;iframe;img;input;object;source(inpicture);video',
    description: 'Horizontal dimension',
  },
  {
    attribute: 'wrap',
    element: 'textarea',
    description: 'How the value of the form control is to be wrapped forform submission',
  },
];
