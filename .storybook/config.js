import React from 'react';
import { configure, addDecorator } from '@storybook/react';

// import injectGlobalStyles from '../src/styles/global-styles';
import { ThemeProvider, theme } from '../src/components/styles';

// Dynamically decide wich styles to load.
// if (PRODUCTION) {
//   require('./bamboo-ui-global.css');
// }

// if (!PRODUCTION) {
//   injectGlobalStyles({ theme: themes.standard() });
// }


const withThemeProvider = storyFn => (
  <ThemeProvider
    theme={theme}
  >
    {storyFn()}
  </ThemeProvider>
);


// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  addDecorator(withThemeProvider);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
