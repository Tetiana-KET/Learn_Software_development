import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImmutable from "eslint-plugin-immutable";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { immutable: pluginImmutable },
    rules: {
      "immutable/no-mutation": "error", // Disallow mutation
      "immutable/no-this": "error", // Disallow `this` usage
    },
  },
];

// that is eslint configuretion for functional programming. Not to mutate data