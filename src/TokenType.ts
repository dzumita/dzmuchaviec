export default class TokenType {
  name: string
  regex: string

  constructor(name: string, regex: string) {
    this.name = name
    this.regex = regex
  }
}

export const tokenTypesList = {
  'NUMBER':   new TokenType('NUMBER', '[0-9]*'),
  'VARIABLE': new TokenType('VARIABLE', '[а-я]*'),
  'POINT':    new TokenType('POINT', '\\.'),
  'SPACE':    new TokenType('SPACE', '[ \\n\\t\\r]'),
  'ASSIGN':   new TokenType('ASSIGN', '='),
  'SEE':      new TokenType('SEE', 'УБАЧЫЦЬ'),
  'PLUS':     new TokenType('PLUS', '\\+'),
  'MINUS':    new TokenType('MINUS', '\\-'),
  'LPAR':     new TokenType('LPAR', '\\('),
  'RPAR':     new TokenType('RPAR', '\\)'),
}