import SyntaxHighlighter from './interfaces/SyntaxHighlighter.interface';

class JavaScriptKeywordHighlighter implements SyntaxHighlighter {
  private keywords = [
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'export',
    'extends',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'in',
    'instanceof',
    'new',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
  ];

  highlight(code: string): string {
    // Simple regex-based keyword highlighting for demonstration purposes
    const keywordRegex = new RegExp(`\\b(${this.keywords.join('|')})\\b`, 'g');
    return code.replace(keywordRegex, '<span style="color: blue;">$&</span>');
  }
}

export default JavaScriptKeywordHighlighter;
