PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_STRING,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$))/,null,"'"],[PR.PR_PLAIN,/^\s+/,null," \r\n\t\xa0"]],[[PR.PR_COMMENT,/^\(\*[\s\S]*?(?:\*\)|$)|^\{[\s\S]*?(?:\}|$)/,null],[PR.PR_KEYWORD,/^(?:ABSOLUTE|AND|ARRAY|ASM|ASSEMBLER|BEGIN|CASE|CONST|CONSTRUCTOR|DESTRUCTOR|DIV|DO|DOWNTO|ELSE|END|EXTERNAL|FOR|FORWARD|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INLINE|INTERFACE|INTERRUPT|LABEL|MOD|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|RECORD|REPEAT|SET|SHL|SHR|THEN|TO|TYPE|UNIT|UNTIL|USES|VAR|VIRTUAL|WHILE|WITH|XOR)\b/i,null],[PR.PR_LITERAL,/^(?:true|false|self|nil)/i,null],[PR.PR_PLAIN,/^[a-z][a-z0-9]*/i,null],[PR.PR_LITERAL,/^(?:\$[a-f0-9]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?)/i,null,"0123456789"],[PR.PR_PUNCTUATION,/^.[^\s\w\.$@\'\/]*/,null]]),["pascal"]);