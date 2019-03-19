import { injectGlobal } from 'emotion';
export const resets = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const createGlobalStyles = ({ theme, custom = '' }) => `
  ${resets}
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    [type='button'] {
      appearance: none;
    }
  }
  body {
    background-color: ${theme.colors.bodyBg};
    color: ${theme.colors.bodyColor};
  }
  html, body, input, select, optgroup, textarea, button {
    font-weight: ${theme.fontWeight.regular};
    font-family: ${theme.fontStack.default};
    font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }
  pre, code {
    font-family: ${theme.fontStack.mono};
  }
  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
    font-weight: ${theme.fontWeight.regular};
    text-decoration-skip: edges;
  }
  /**
   * Allow custom styles to override the default styles
   */
  ${custom}
`;

export default ({ theme, custom }) => {
  const mergedCustomStyles = createGlobalStyles({ theme, custom });
  return injectGlobal({ theme, custom: mergedCustomStyles });
};
