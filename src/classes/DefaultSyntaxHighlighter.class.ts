// temporary solution

import SyntaxHighlighter from './interfaces/SyntaxHighlighter.interface';

class DefaultSyntaxHighlighter implements SyntaxHighlighter {
  highlight(code: string): string {
    return code;
  }
}

export default DefaultSyntaxHighlighter;