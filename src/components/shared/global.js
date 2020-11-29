import { css } from '@emotion/react';

export const rootStyles = css`
  :root {
    --color__black900: #0a1f44;
    --color__black800: #14284b;
    --color__black700: #283a5b;
    --color__black600: #364766;
    --color__black500: #455571;
    --color__black400: #4e5d78;
    --color__black300: #596780;
    --color__black200: #627088;
    --color__black100: #717d92;

    --color__gray900: #8a94a6;
    --color__gray800: #98a1b1;
    --color__gray700: #a7aebb;
    --color__gray600: #b0b7c3;
    --color__gray500: #c9ced6;
    --color__gray400: #e1e4e8;
    --color__gray300: #f1f2f4;
    --color__gray200: #f7f8f9;
    --color__gray100: #fafbfb;

    --color__brand900: #ff584a;
    --color__brand800: #fe6c61;
    --color__brand700: #ff867e;
    --color__brand600: #ffa29b;
    --color__brand500: #ffbdb8;
    --color__brand400: #ffcac6;
    --color__brand300: #ffd7d4;
    --color__brand200: #ffe4e3;
    --color__brand100: #ffeeed;

    --color__success900: #136a4a;
    --color__success800: #23825f;
    --color__success700: #36ab80;
    --color__success600: #6fcaa8;
    --color__success500: #a9dcc9;
    --color__success400: #d0eddf;
    --color__success300: #eaf7f1;
    --color__success200: #f5fbf8;
    --color__success100: #fafdfc;

    --color__warning900: #ef8511;
    --color__warning800: #f69d2c;
    --color__warning700: #f7af22;
    --color__warning600: #fbc050;
    --color__warning500: #fbe0a1;
    --color__warning400: #fdeecb;
    --color__warning300: #fef7e6;
    --color__warning200: #fefaf1;
    --color__warning100: #fffdf8;

    --color__danger900: #a32801;
    --color__danger800: #d13a06;
    --color__danger700: #f4541d;
    --color__danger600: #f7926f;
    --color__danger500: #fabeaa;
    --color__danger400: #fcd7ca;
    --color__danger300: #fde8e1;
    --color__danger200: #fef6f3;
    --color__danger100: #fffbfa;

    --color__primary900: #01408f;
    --color__primary800: #026dd6;
    --color__primary700: #0284fe;
    --color__primary600: #4ba7fe;
    --color__primary500: #83c3fe;
    --color__primary400: #b3daff;
    --color__primary300: #dceeff;
    --color__primary200: #eef7ff;
    --color__primary100: #f8fbff;

    --color__white: #ffffff;
    --color__black: #000000;
    --color__transparent: rgba(0, 0, 0, 0);
    --color__disabled: #b0b7c3;

    // radius
    --radius__0: 0px;
    --radius__xsmall: 2px;
    --radius__small: 4px;
    --radius__medium: 6px;
    --radius__large: 6px;

    // border
    --border__color__standart: rgba(0, 0, 0, 0.1);

    // transition
    --motion__ease--inout: cubic-bezier(0.42, 0, 0.58, 1);
    --motion__ease--linear: linear;
    --motion__ease--out: cubic-bezier(0.5, 0, 0, 1);
    --motion__time--fast: 400ms;
    --motion__time--faster: 200ms;
    --motion__time--fastest: 100ms;
    --motion__time--slow: 600ms;
    --motion__time--slower: 1s;
    --motion__time--slowest: 1.2s;

    // breakpoint
    --breakpoint__xsmall: 367px;
    --breakpoint__small: 767px;
    --breakpoint__medium: 1024px;
    --breakpoint__large: 1600px;
    --breakpoint__xlarge: 1920px;

    // theme
    --color__theme__primary: var(--color__primary700);

    --color__theme__disabled: var(--color__disabled);

    --color__standard__text: var(--color__black);
    --color__standard__background: var(--color__white);

    --boxshadow__elevation0: 0 0 0 0 transparent;
    --boxshadow__elevation1: 0 0 12px 0 rgba(0, 0, 0, 0.12);
    --boxshadow__elevation2: 0 0 40px 0 rgba(0, 0, 0, 0.8);
    --boxshadow__focusring: 0 0 0 3px var(--color__utility__focusring);
    --spacing__base_unit: 8px;

    // font family
    --type__primary: -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, 'Fira Sans', 'Droid Sans', sans-serif;
    --type__code: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;

    // font weight
    --type__weight--regular: 400;
    --type__weight--semibold: 500;
    --type__weight--bold: 700;
    --type__weight--extrabold: 800;
    --type__weight--black: 800;

    // font sizes
    --type__body__xsmall--fontsize: 10px;
    --type__body__xsmall--fontweight: 400;
    --type__body__xsmall--fontweight_strong: 500;
    --type__body__xsmall--lineheight: 18px;

    --type__body__small--fontsize: 12px;
    --type__body__small--fontweight: 400;
    --type__body__small--fontweight_strong: 500;
    --type__body__small--lineheight: 20px;

    --type__body__standard--fontsize: 14px;
    --type__body__standard--fontweight: 400;
    --type__body__standard--fontweight_strong: 500;
    --type__body__standard--lineheight: 22px;

    --type__body__large--fontsize: 16px;
    --type__body__large--fontweight: 400;
    --type__body__large--fontweight_strong: 500;
    --type__body__large--lineheight: 24px;

    --type__title__small--fontsize: 16px;
    --type__title__small--fontweight: 400;
    --type__title__small--fontweight_strong: 500;
    --type__title__small--lineheight: 26px;

    --type__title__standard--fontsize: 22px;
    --type__title__standard--fontweight: 500;
    --type__title__standard--lineheight: 28px;

    --type__title__large--fontsize: 28px;
    --type__title__large--fontweight: 500;
    --type__title__large--lineheight: 36px;
  }
`;

export const htmlStyles = css`
  font-family: var(--type__primary);
  font-size: var(--type__body__standard--fontsize);
  color: var(--color__standard__text);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
`;

export const normalizeStyles = css`
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--type__weight--bold);
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: var(--type__primary);
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: var(--type__weight--bold);
  }

  hr {
    border: none;
    border-top: 1px solid var(--border__color__standart);
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: var(--type__code);
    font-size: var(--type__body__standard--fontsize);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
    color: var(--color__standard__text);
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: var(--color__standard__text);
    border-radius: 3px;
    margin: 1rem 0;
  }
`;

export const GlobalStyle = css`
  ${rootStyles}
  ${normalizeStyles}
  html {
    ${htmlStyles}
  }
`;
