module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "es6": true,
    },
    "extends": [
        "airbnb-base/legacy",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        // https://eslint.org/docs/rules/template-curly-spacing
        "template-curly-spacing": "off",

        // ensure JSDoc comments are valid
        // http://eslint.org/docs/rules/valid-jsdoc
        "valid-jsdoc": "warn",

        // disallow unused variables
        // https://eslint.org/docs/rules/no-unused-vars
        "no-unused-vars": 2,

        // "import/extensions": [2, "never", { "web.js": "never", "json": "never" }],
        // "import/no-unresolved": [2, { "ignore": ["antd-mobile"] }],

        "no-use-before-define": 0,
        '@typescript-eslint/no-use-before-define': 2,
        // enforce that class methods utilize this
        // https://eslint.org/docs/rules/class-methods-use-this
        "class-methods-use-this": "off",

        // disallow assignment operators in return statements
        // https://eslint.org/docs/rules/no-return-assign
        "no-return-assign": "off",

        // disallow lexical declarations in case clauses
        // https://eslint.org/docs/rules/no-case-declarations
        "no-case-declarations": "off",

        // specify the maximum cyclomatic complexity allowed in a program
        // http://eslint.org/docs/rules/complexity
        "complexity": ["warn", 20],

        // specify curly brace conventions for all control statements
        // http://eslint.org/docs/rules/curly
        "curly": ["error", "all"],

        // make sure for-in loops have an if statement
        // http://eslint.org/docs/rules/guard-for-in
        "guard-for-in": "warn",

        // disallow division operators explicitly at beginning of regular expression
        // http://eslint.org/docs/rules/no-div-regex
        "no-div-regex": "warn",

        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unmodified-loop-condition": "warn",

        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        "wrap-iife": ["error", "any", {
            "functionPrototypeMethods": false
        }],

        // disallow the catch clause parameter name being the same as a variable in the outer scope
        // http://eslint.org/docs/rules/no-catch-shadow
        "no-catch-shadow": "error",

        // require trailing commas in multiline object literals
        // http://eslint.org/docs/rules/comma-dangle
        "comma-dangle": ["error", "never"],

        // enforces consistent naming when capturing the current execution context
        // http://eslint.org/docs/rules/consistent-this
        "consistent-this": ["error", "that"],

        // disallow dangling underscores in identifiers
        // http://eslint.org/docs/rules/no-underscore-dangle
        "no-underscore-dangle": ["error", {
            "allow": [
                "__INITIAL_STATE__",
                "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__",
                "_ACJ_",
                "__player"
            ]
        }],

        // disallow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        "no-plusplus": ["error", {
            "allowForLoopAfterthoughts": true
        }],

        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        "indent": ["warn", 2, {
            "MemberExpression": 1,
            "ignoredNodes": ["TemplateLiteral"]
        }],

        // specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-double"],

        // specify the maximum depth that blocks can be nested
        // http://eslint.org/docs/rules/max-depth
        "max-depth": ["warn", 4],

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        "max-len": ["error", 120, 4, {
            "ignoreUrls": true,
            "ignoreComments": false,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true
        }],

        // specify the max number of lines in a file
        // http://eslint.org/docs/rules/max-lines
        "max-lines": ["warn", {
            "max": 300,
            "skipBlankLines": true,
            "skipComments": true
        }],

        // specify the maximum depth callbacks can be nested
        // http://eslint.org/docs/rules/max-nested-callbacks
        "max-nested-callbacks": ["error", 5],

        // limits the number of parameters that can be used in the function declaration.
        // http://eslint.org/docs/rules/max-params
        "max-params": ["error", 3],

        // specify the maximum number of statement allowed in a function
        "max-statements": ["error", 50],

        // restrict the number of statements per line
        // http://eslint.org/docs/rules/max-statements-per-line
        "max-statements-per-line": "error",

        // allow/disallow an empty newline after var statement
        // http://eslint.org/docs/rules/newline-after-var
        "newline-after-var": ["warn" ,"always"],

        // http://eslint.org/docs/rules/newline-before-return
        "newline-before-return": "warn",

        // disallow use of the continue statement
        // http://eslint.org/docs/rules/no-continue
        "no-continue": "error",

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // http://eslint.org/docs/rules/linebreak-style
        "linebreak-style": ["off", "windows"],

        // ES6 ??????
        // require method and property shorthand syntax for object literals
        // http://eslint.org/docs/rules/object-shorthand
        "object-shorthand": ["warn", "always", {
            "ignoreConstructors": false,
            "avoidQuotes": true
        }],

        // React ??????
        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-uses-vars": "error",

        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-react": "error",

        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/react-in-jsx-scope": "error",

        // ??????????????????????????????devDependencies??????
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": 0,
    }
};
