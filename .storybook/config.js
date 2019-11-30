import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider, theme } from '../src/components/styles';
import '../src/global/global.scss';

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
