import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import themes from '../src/styles/themes';
import injectGlobalStyles from '../src/styles/global-styles';
import { Theme } from '../src/components/styles';

const custom = `
html,
body {
  background: transparent;
}`;

injectGlobalStyles({ theme: themes.standard(), custom });

const withTheme = storyFn => (
  <Theme
    themes={themes}
  >
    {storyFn()}
  </Theme>
);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  addDecorator(withTheme);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
