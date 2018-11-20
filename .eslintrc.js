module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    // Truffle testing global vars
    "globals": {
        "expect": true,
        "assert": true,
        "contract": true,
        "artifacts": true,
	    "web3": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "object-curly-spacing": "error",
        "space-before-function-paren": "error",
        "space-in-parens": "error",
        "no-console": "off",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }]
    }
}
