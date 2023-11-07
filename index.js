module.exports = {
  "rules": {
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "func-call-spacing": "off",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "no-console": [
      "warn",
      {
        "allow": [
          "error",
          "warn"
        ]
      }
    ],
    "no-useless-constructor": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "import/named": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-void": [
      "error",
      {
        "allowAsStatement": true
      }
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        "ignoreIIFE": true
      }
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "arguments": false
        }
      }
    ],
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/consistent-type-imports": "error"
  },
}
