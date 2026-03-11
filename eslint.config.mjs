import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const PASCAL = /^[A-Z][a-zA-Z0-9]*$/;

const CAMEL = /^[a-z][a-zA-Z0-9]*$/;

const NEXTJS_RESERVED = new Set([
  "page",
  "layout",
  "error",
  "loading",
  "not-found",
  "template",
  "route",
  "middleware",
  "globals",
  "favicon",
  "index",
]);

const filenameCasingRule = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "PascalCase for component files and camelCase for utility files",
    },
    schema: [],
    messages: {
      mustBePascal:
        "Component files must use PascalCase. " ,
      mustBeCamel:
        "Utility files must use camelCase. ",
    },
  },
  create(context) {
    return {
      Program() {
        const filePath = context.filename ?? context.getFilename?.();
        if (!filePath) return;

        const normalised = filePath.replace(/\\/g, "/");

        const basename = normalised.split("/").pop() ?? "";
        const nameNoExt = basename.replace(/\.(tsx?|jsx?)$/, "");

        if (NEXTJS_RESERVED.has(nameNoExt)) return;

        if (normalised.includes("/src/components/")) {
          if (!PASCAL.test(nameNoExt)) {
            const suggestion =
              nameNoExt.charAt(0).toUpperCase() + nameNoExt.slice(1);
            context.report({
              loc: { line: 1, column: 0 },
              messageId: "mustBePascal",
              data: { filename: basename, suggestion: suggestion + ".tsx" },
            });
          }
          return;
        }

        const UTILITY_FOLDERS = [
          "/src/utils/",
          "/src/hooks/",
          "/src/services/",
          "/src/mock/",
          "/src/types/",
          "/src/lib/",
        ];

        for (const folder of UTILITY_FOLDERS) {
          if (normalised.includes(folder)) {
            if (!CAMEL.test(nameNoExt)) {
              const suggestion =
                nameNoExt.charAt(0).toLowerCase() + nameNoExt.slice(1);
              const folderLabel = folder.replace(/^\/src\/|\/$/g, "");
              context.report({
                loc: { line: 1, column: 0 },
                messageId: "mustBeCamel",
                data: {
                  filename: basename,
                  suggestion: suggestion + ".ts",
                  folder: "src/" + folderLabel,
                },
              });
            }
            return;
          }
        }
      },
    };
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allow", 
          trailingUnderscore: "forbid",
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },

        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow", 
        },
        {
          selector: "property",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },

        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },

        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
        {
          selector: "typeParameter",
          format: ["PascalCase"],
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],
    },
  },

  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      local: {
        rules: {
          "filename-casing": filenameCasingRule,
        },
      },
    },
    rules: {
      "local/filename-casing": "error",
    },
  },
]);

export default eslintConfig;
