module.exports = {
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  globals: {
    // FROM FORUM WEB
    $: "readonly",
    XenForo: "readonly",
    turnstile: "readonly",
    animateCSS: "readonly",
    // IMPORTED JS LIBS
    Sortable: "readonly",
    DOMPurify: "readonly",
    Coloris: "readonly",
    // WEBPACK ENV
    DEV_MODE: "readonly",
  },
};
