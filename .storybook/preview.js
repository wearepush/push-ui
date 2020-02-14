import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from 'storybook-addon-deps/blocks';
import { Global } from '@emotion/core';
import { ThemeProvider, theme } from '../src/components/styles';
import { loadFontsForStorybook } from '../src/utils/index';
// import '../src/global/global.scss';
import { GlobalStyle } from '../src/components/shared/global';

const withThemeProvider = story => (
  <ThemeProvider
    theme={theme}
  >
    {story()}
  </ThemeProvider>
);

addParameters({
  options: {
    showRoots: true,
  },
  docs: { page: DocsPage },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  }
});

addDecorator(withThemeProvider);

addDecorator(story => (
  <>
    <Global styles={GlobalStyle} />
    {story()}
  </>
));

loadFontsForStorybook();
