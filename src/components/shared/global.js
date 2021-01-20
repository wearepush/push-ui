import { css } from '@emotion/react';

export const rootStyles = css`
  :root {
    --color--black900: #0a1f44;
    --color--black800: #14284b;
    --color--black700: #283a5b;
    --color--black600: #364766;
    --color--black500: #455571;
    --color--black400: #4e5d78;
    --color--black300: #596780;
    --color--black200: #627088;
    --color--black100: #717d92;

    --color--gray900: #8a94a6;
    --color--gray800: #98a1b1;
    --color--gray700: #a7aebb;
    --color--gray600: #b0b7c3;
    --color--gray500: #c9ced6;
    --color--gray400: #e1e4e8;
    --color--gray300: #f1f2f4;
    --color--gray200: #f7f8f9;
    --color--gray100: #fafbfb;

    --color--brand900: #ff584a;
    --color--brand800: #fe6c61;
    --color--brand700: #ff867e;
    --color--brand600: #ffa29b;
    --color--brand500: #ffbdb8;
    --color--brand400: #ffcac6;
    --color--brand300: #ffd7d4;
    --color--brand200: #ffe4e3;
    --color--brand100: #ffeeed;

    --color--success900: #136a4a;
    --color--success800: #23825f;
    --color--success700: #36ab80;
    --color--success600: #6fcaa8;
    --color--success500: #a9dcc9;
    --color--success400: #d0eddf;
    --color--success300: #eaf7f1;
    --color--success200: #f5fbf8;
    --color--success100: #fafdfc;

    --color--warning900: #ef8511;
    --color--warning800: #f69d2c;
    --color--warning700: #f7af22;
    --color--warning600: #fbc050;
    --color--warning500: #fbe0a1;
    --color--warning400: #fdeecb;
    --color--warning300: #fef7e6;
    --color--warning200: #fefaf1;
    --color--warning100: #fffdf8;

    --color--danger900: #a32801;
    --color--danger800: #d13a06;
    --color--danger700: #f4541d;
    --color--danger600: #f7926f;
    --color--danger500: #fabeaa;
    --color--danger400: #fcd7ca;
    --color--danger300: #fde8e1;
    --color--danger200: #fef6f3;
    --color--danger100: #fffbfa;

    --color--primary900: #01408f;
    --color--primary800: #026dd6;
    --color--primary700: #0284fe;
    --color--primary600: #4ba7fe;
    --color--primary500: #83c3fe;
    --color--primary400: #b3daff;
    --color--primary300: #dceeff;
    --color--primary200: #eef7ff;
    --color--primary100: #f8fbff;

    --color--white: #fff;
    --color--black: #000;
    --color--transparent: rgba(0, 0, 0, 0);
    --color--disabled: #b0b7c3;

    // radius
    --radius--0: 0px;
    --radius--xs: 2px;
    --radius--sm: 4px;
    --radius--md: 6px;
    --radius--lg: 8px;
    --radius--xl: 12px;
    --radius--circle: 1000rem;

    // border
    --border__color__standart: rgba(0, 0, 0, 0.1);
    --border__color__invalid: red;
    --border__color__valid: green;
    --border__color__disabled: #e1e4e8;

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
    --breakpoint--xsmall: 367px;
    --breakpoint--small: 767px;
    --breakpoint--medium: 1024px;
    --breakpoint--large: 1600px;
    --breakpoint--xlarge: 1920px;

    // theme
    --color__theme__primary: var(--color--primary700);

    --color__theme__disabled: var(--color--disabled);

    --color__standard__text: var(--color--black);
    --color__standard__background: var(--color--white);

    // shadow
    --shadow--0: none;
    --shadow--1: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 1px 1px 0 rgba(8, 11, 14, 0.1);
    --shadow--2: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 3px 3px -1px rgba(8, 11, 14, 0.1);
    --shadow--3: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1);
    --shadow--4: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1);
    --shadow--5: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 32px 40px -1px rgba(8, 11, 14, 0.1);

    // font family
    --type__primary: -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', sans-serif;
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
