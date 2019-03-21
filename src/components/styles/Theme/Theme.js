import React, { Component, Fragment } from "react";
import { node, object, string } from "prop-types";
import { ThemeProvider } from "emotion-theming";

import createGlobalStyles from '../../../styles/global-styles';

export default class Theme extends Component {
  static propTypes = {
    children: node.isRequired,
    initialThemeId: string.isRequired,
    themes: object.isRequired
  };

  static defaultProps = {
    initialThemeId: "standard",
    themes: {},
  };

  constructor(props) {
    super(props);

    const { initialThemeId: themeId } = props;
    const theme = this.getTheme(themeId, { });

    createGlobalStyles({ theme });

    this.state = {
      themeId,
    };
  }

  setTheme = themeId =>
    new Promise((resolve, reject) => { // eslint-disable-line
      if (themeId === this.state.themeId) {
        resolve();
        return;
      }
      if (!this.props.themes[themeId]) {
        reject();
        return;
      }
    });

  getTheme = (themeId, config) => {
    const { themes } = this.props;
    const themeFn = themes[themeId] || themes.standard;
    return {
      ...themeFn(config),
      setTheme: this.setTheme,
    };
  };

  render() {
    const { themeId, ...config } = this.state;
    const theme = this.getTheme(themeId, config);
    const { children } = this.props;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Fragment>
    );
  }
}
