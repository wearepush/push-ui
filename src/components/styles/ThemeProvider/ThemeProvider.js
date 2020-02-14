import React from 'react';
import { node, object } from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

const ThemeProvider = ({ children, theme }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

ThemeProvider.propTypes = {
  children: node.isRequired,
  theme: object.isRequired,
};

export default ThemeProvider;
