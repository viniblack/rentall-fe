import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "@rocketseat/eslint-config/next",
    "next/core-web-vitals"
  ),
  {
    plugins: {
      "simple-import-sort": require("eslint-plugin-simple-import-sort"),
      "@tanstack/query": require("@tanstack/eslint-plugin-query"),
    },
    rules: {
      "simple-import-sort/imports": "error",
      "react/no-unescaped-entities": "off",
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/no-rest-destructuring": "warn",
      "@tanstack/query/stable-query-client": "error",
      "react/display-name": "off",
    },
  },
];