import { css } from '@emotion/react';
import { color, typography } from './styles';

export const rootStyles = css`
  :root {
    --color__black900: #0A1F44;
    --color__black800: #14284B;
    --color__black700: #283A5B;
    --color__black600: #364766;
    --color__black500: #455571;
    --color__black400: #4E5D78;
    --color__black300: #596780;
    --color__black200: #627088;
    --color__black100: #717D92;

    --color__gray900: #8A94A6;
    --color__gray800: #98A1B1;
    --color__gray700: #A7AEBB;
    --color__gray600: #B0B7C3;
    --color__gray500: #C9CED6;
    --color__gray400: #E1E4E8;
    --color__gray300: #F1F2F4;
    --color__gray200: #F7F8F9;
    --color__gray100: #FAFBFB;

    --color__brand900: #FF584A;
    --color__brand800: #FE6C61;
    --color__brand700: #FF867E;
    --color__brand600: #FFA29B;
    --color__brand500: #FFBDB8;
    --color__brand400: #FFCAC6;
    --color__brand300: #FFD7D4;
    --color__brand200: #FFE4E3;
    --color__brand100: #FFEEED;

    --color__success900: #136A4A;
    --color__success800: #23825F;
    --color__success700: #36AB80;
    --color__success600: #6FCAA8;
    --color__success500: #A9DCC9;
    --color__success400: #D0EDDF;
    --color__success300: #EAF7F1;
    --color__success200: #F5FBF8;
    --color__success100: #FAFDFC;

    --color__warning900: #EF8511;
    --color__warning800: #F69D2C;
    --color__warning700: #F7AF22;
    --color__warning600: #FBC050;
    --color__warning500: #FBE0A1;
    --color__warning400: #FDEECB;
    --color__warning300: #FEF7E6;
    --color__warning200: #FEFAF1;
    --color__warning100: #FFFDF8;

    --color__danger900: #A32801;
    --color__danger800: #D13A06;
    --color__danger700: #F4541D;
    --color__danger600: #F7926F;
    --color__danger500: #FABEAA;
    --color__danger400: #FCD7CA;
    --color__danger300: #FDE8E1;
    --color__danger200: #FEF6F3;
    --color__danger100: #FFFBFA;

    --color__primary900: #01408F;
    --color__primary800: #026DD6;
    --color__primary700: #0284FE;
    --color__primary600: #4BA7FE;
    --color__primary500: #83C3FE;
    --color__primary400: #B3DAFF;
    --color__primary300: #DCEEFF;
    --color__primary200: #EEF7FF;
    --color__primary100: #F8FBFF;

    --color__white: #FFFFFF;
    --color__black: #000000;
    --color__transparent: rgba(0,0,0,0);
    --color__disabled: #B0B7C3;

    --radius__0: 0px;
    --radius__xsmall: 2px;
    --radius__small: 4px;
    --radius__medium: 6px;
    --radius__large: 6px;

    --motion__ease--inout: cubic-bezier(0.42, 0, 0.58, 1);
    --motion__ease--linear: linear;
    --motion__ease--out: cubic-bezier(0.5, 0, 0, 1);
    --motion__time--fast: 400ms;
    --motion__time--faster: 200ms;
    --motion__time--fastest: 100ms;
    --motion__time--slow: 600ms;
    --motion__time--slower: 1s;
    --motion__time--slowest: 1.2s;

    --breakpoint__xsmall: 367px;
    --breakpoint__small: 767px;
    --breakpoint__medium: 1024px;
    --breakpoint__large: 1600px;
    --breakpoint__xlarge: 1920px;



    --color__theme__primary: var(--color__sapphire--100);
    --color__theme__primary--dark: var(--color__sapphire--110);
    --color__theme__primary--light: var(--color__sapphire--90);
    --color__theme__primary--lighter: var(--color__sapphire--20);
    --color__theme__primary--lightest: var(--color__sapphire--5);
    --color__theme__accent: var(--color__french__vanilla--100);
    --color__theme__accent--dark: var(--color__french__vanilla--120);
    --color__theme__accent--light: var(--color__french__vanilla--20);
    --color__theme__link: var(--color__dbx__blue--100);

    --color__standard__text: var(--color__black);
    --color__standard__border: rgba(0, 0, 0, 0.15);
    --color__standard__background: var(--color__white);

    --color__faint__text: var(--color__black--60);
    --color__faint__border: rgba(0, 0, 0, 0.05);
    --color__faint__background: var(--color__black--5);

    --color__disabled__text: var(--color__black--40);
    --color__disabled__border: var(--color__black--25);
    --color__disabled__background: var(--color__black--25);
    --color__highlight__border: var(--color__theme__accent);
    --color__highlight__background: var(--color__theme__accent--light);
    --color__error__text: var(--color__crimson--100);
    --color__error__border: var(--color__crimson--100);
    --color__error__background: var(--color__crimson--5);
    --color__elevated__background: var(--color__white);
    --color__inverse__standard__text: var(--color__white);
    --color__inverse__standard__border: hsla(0, 0%, 100%, 0.3);
    --color__inverse__standard__background: var(--color__black);
    --color__inverse__faint__text: hsla(0, 0%, 100%, 0.7);
    --color__inverse__faint__border: hsla(0, 0%, 100%, 0.2);
    --color__inverse__faint__background: var(--color__black--90);
    --color__inverse__disabled__text: hsla(0, 0%, 100%, 0.4);
    --color__inverse__disabled__border: hsla(0, 0%, 100%, 0.3);
    --color__inverse__disabled__background: var(--color__black--15);
    --color__inverse__highlight__border: var(--color__theme__accent);
    --color__inverse__highlight__background: var(--color__opacity--lighten2);
    --color__inverse__error__text: var(--color__candy__apple--80);
    --color__inverse__error__border: var(--color__candy__apple--80);
    --color__inverse__error__background: rgba(255, 0, 46, 0.3);
    --color__inverse__elevated__background: var(--color__black--95);
    --color__utility__focusring: rgba(178, 205, 255, 0.8);
    --color__utility__overlay: rgba(0, 0, 0, 0.4);

    --boxshadow__elevation0: 0 0 0 0 transparent;
    --boxshadow__elevation1: 0 0 12px 0 rgba(0, 0, 0, 0.12);
    --boxshadow__elevation2: 0 0 40px 0 rgba(0, 0, 0, 0.8);
    --boxshadow__focusring: 0 0 0 3px var(--color__utility__focusring);
    --spacing__base_unit: 8px;

    --__bodyFontStack: -apple-system,'Helvetica Neue',BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Fira Sans','Droid Sans',sans-serif';
    --__titleFontStack: Sharp Grotesk, SharpGrotesk, var(--__bodyFontStack);

    --type__body__large--fontfamily: var(--__bodyFontStack);
    --type__body__large--fontsize: 16px;
    --type__body__large--fontweight: 400;
    --type__body__large--fontweight_strong: 500;
    --type__body__large--lineheight: 24px;
    --type__body__small--fontfamily: var(--__bodyFontStack);
    --type__body__small--fontsize: 12px;
    --type__body__small--fontweight: 400;
    --type__body__small--fontweight_strong: 500;
    --type__body__small--lineheight: 20px;
    --type__body__standard--fontfamily: var(--__bodyFontStack);
    --type__body__standard--fontsize: 14px;
    --type__body__standard--fontweight: 400;
    --type__body__standard--fontweight_strong: 500;
    --type__body__standard--lineheight: 22px;
    --type__body__xsmall--fontfamily: var(--__bodyFontStack);
    --type__body__xsmall--fontsize: 10px;
    --type__body__xsmall--fontweight: 400;
    --type__body__xsmall--fontweight_strong: 500;
    --type__body__xsmall--lineheight: 18px;

    --type__title__large--fontfamily: var(--__titleFontStack);
    --type__title__large--fontsize: 28px;
    --type__title__large--fontweight: 500;
    --type__title__large--lineheight: 36px;
    --type__title__small--fontfamily: var(--__titleFontStack);
    --type__title__small--fontsize: 16px;
    --type__title__small--fontweight: 400;
    --type__title__small--fontweight_strong: 500;
    --type__title__small--lineheight: 26px;
    --type__title__standard--fontfamily: var(--__titleFontStack);
    --type__title__standard--fontsize: 22px;
    --type__title__standard--fontweight: 500;
    --type__title__standard--lineheight: 28px;
  }
`;

export const htmlStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s2}px;
  color: ${color.darkest};

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
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
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
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
    color: ${color.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
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
