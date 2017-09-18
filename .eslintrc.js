module.exports = {
    
    "extends":  [
	 //"eslint:recommended",
	 "plugin:jasmine/recommended",
	 "plugin:unicorn/recommended",
	 "plugin:security/recommended"
    ],
    "plugins": [
	"jasmine",
	"unicorn",
	//"optimize-regex",
	"typelint",
	"security",
    "xss"
	
    ],
	"settings": {
	  "typelint": {
	    "models": {
		"json": {
        	  "dir": "./models",
		  "swagger" :"./swagger",
         	 "exclude": ["wrong_dir"]
      		  },
	      "redux": {
		"reducerPath": "./src/client/redux/reducer.js"
	      }
	    },
	    "useCache":  true
	  }
	},
    "rules": {

        // Best practices
       "array-callback-return": "error",
        "block-scoped-var": "warn",
        "complexity": "error", //default value is 20
        "curly": "warn",
        "default-case": "warn",
        "dot-notation": "warn",
        "eqeqeq": "error",
        "guard-for-in": "warn",
        "no-alert": "error",
        "no-caller": "error",
        "no-empty-function": "warn",
        "no-eq-null": "warn", 
        "no-floating-decimal": "warn",
        
        "no-lone-blocks": "error",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-eval":"error",
        "no-octal": "warn",
        "no-param-reassign": "warn",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "warn", 
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "warn",
        "no-useless-concat": "warn",
        "no-useless-return": "warn",
        "wrap-iife": "warn",
        "yoda": "warn", 

        // Variable declaration rules
        "no-delete-var": "error",
        "no-shadow": "warn",
        "no-shadow-restricted-names": "warn",
        "no-undef-init": "warn",
        "no-use-before-define": "warn",

        // Stylistic issue rules
        "array-bracket-spacing": "warn",
        "array-element-newline": ["warn", "never"],
        "block-spacing": "warn",
        "brace-style": "warn", // one truce brace style: default
        "camelcase": "warn",
        "comma-dangle": "warn", //default option will disallow trailing comma
        "comma-spacing": "warn",
        "comma-style": "warn",
        "func-call-spacing": "warn",

        //"indent": ["warn", "tab"],
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "max-depth": "warn",
        //"max-len": "warn", //default value for max character in line is 80
        "max-nested-callbacks": "warn", 
        "new-cap": "warn",
        "new-parens": "warn",
        "no-bitwise": "warn",
        "no-lonely-if": "warn",
        "no-mixed-operators": "warn",
        "no-multi-assign": "warn",
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": ["warn", {"ignoreComments": true}],
        "no-unneeded-ternary": "warn",
        "no-whitespace-before-property": "warn",
        "object-property-newline": "warn",
        "operator-linebreak": ["warn", "before"],
        "quotes": "warn",
        "semi": "warn",
        "semi-style": "warn",
        "space-in-parens": "warn",
        "space-infix-ops": "warn",
        "spaced-comment": "warn",
		"no-global-assign": "off",
        "wrap-regex": "warn",
	"optimize-regex/optimize-regex": "warn",
	"unicorn/catch-error-name": ["error", {"name": "err"}],
	"unicorn/explicit-length-check": "error",
	"unicorn/filename-case": ["error", {"case": "pascalCase"}],
	"unicorn/no-abusive-eslint-disable": "error",
	"unicorn/no-process-exit": "error",
	"unicorn/throw-new-error": "error",
	"unicorn/number-literal-case": "error",
	"unicorn/escape-case": "error",
	"unicorn/no-array-instanceof": "error",
	"unicorn/no-new-buffer": "error",
	"unicorn/no-hex-escape": "error",
	"unicorn/custom-error-definition": "error",
	"unicorn/prefer-starts-ends-with": "error",
	"unicorn/prefer-type-error": "error",
	//"unicorn/no-fn-reference-in-iterator": "error",
	//"unicorn/import-index": "error",
	//"unicorn/new-for-builtins": "error",
	//"unicorn/regex-shorthand": "error",
	"typelint/typelint" : "warn",
    "xss/no-mixed-html": "warn",
    "xss/no-location-href-assign": "warn"

        
    }   
};
