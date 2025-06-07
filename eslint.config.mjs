import { dirname } from "path";
import { fileURLToPath   } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
  ),
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      // unicorn eslint 커스터마이징
      "unicorn/import-style": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/consistent-function-scoping": "off",

      // 커스텀 규칙
      "quotes": ["error", "double", { avoidEscape: true }],
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-newline": [
        "error", {
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
          ImportDeclaration: { consistent: true, multiline: true },
          ExportDeclaration: { consistent: true, multiline: true },
        },
      ],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "eol-last": ["error", "always"],
      "array-bracket-newline": ["error", { multiline: true }],
      "function-paren-newline": ["error", "multiline"],
      "import/order": [
        "error", {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
      "padded-blocks": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "no-tabs": "error",
      "no-trailing-spaces": "error",
      "no-duplicate-imports": "error",
      "no-extra-boolean-cast": "error",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "no-dupe-keys": "error",
      "no-var": "error",
      "no-useless-escape": "error",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-before-blocks": ["error", "always"],
      "curly": ["error", "all"],
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "space-infix-ops": "error",
      "prefer-const": "error",
      "yoda": ["error", "never"],
      "block-spacing": ["error", "always"],
      "react/jsx-max-props-per-line": ["error", { maximum: 2, when: "multiline" }],
      "react/jsx-curly-spacing": ["error", { when: "always", children: true }],
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-sort-props": ["error", { callbacksLast: true, shorthandFirst: true, noSortAlphabetically: false }],
      "react/self-closing-comp": ["error", { component: true, html: true }],
    },
  },
];

export default eslintConfig;
