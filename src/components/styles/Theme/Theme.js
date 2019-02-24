import React, { Component, Fragment } from "react";
import { node, object } from "prop-types";
import { ThemeProvider } from 'emotion-theming';

import createGlobalStyles from '../../../styles/global-styles';

export default class Theme extends Component {
  static propTypes = {
    children: node.isRequired,
    themes: object.isRequired
  };

  static defaultProps = {
    initialThemeId: "standard",
    themes: {},
    cookies: {}
  };

  constructor(props) {
    super(props);

    const { cookies, assetPrefix, initialThemeId: themeId } = props;
    const reducedMotion = cookies.reducedMotion === 'true';

    const theme = this.getTheme(themeId, { reducedMotion });

    const custom = assetPrefix
      ? theme.fonts.map(createFontFace(assetPrefix)).join('')
      : '';
    createGlobalStyles({ theme, custom });

    if (assetPrefix && !isSaveData()) {
      loadFonts(theme.fonts);
    }

    this.state = {
      themeId,
      reducedMotion,
      isTransitioning: false
    };
  }

  componentDidMount() {
    // if (isServer) {
    //   return;
    // }
    this.motionQuery = window.matchMedia('(prefers-reduced-motion)');
    this.motionQuery.addListener(this.handleReducedMotionChange);
    if (this.motionQuery.matches) {
      setCookie('reducedMotion', true);
      this.setState({ reducedMotion: true });
    }
    this.colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (this.colorSchemeQuery.matches) {
      setCookie('darkmode', true);
      this.setState({ darkmode: true });
    }
  }

  componentWillUnmount() {
    this.motionQuery.removeListener(this.handleReducedMotionChange);
  }

  handleReducedMotionChange = () => {
    const reducedMotion = this.motionQuery.matches;
    setCookie("reducedMotion", reducedMotion);
    this.animateStateChange({ reducedMotion });
  };

  animateStateChange = newState =>
    new Promise(resolve => {
      this.setState({ ...newState, isTransitioning: true }, () => {
        // Wait for transition animation to finish
        setTimeout(() => {
          this.setState({ isTransitioning: false });
          resolve();
        }, 200);
      });
    });

  toggleState = key => () => {
    const value = !this.state[key];
    setCookie(key, value);
    return this.animateStateChange({ [key]: value });
  };

  toggleReducedMotion = this.toggleState("reducedMotion");

  setTheme = themeId =>
    new Promise((resolve, reject) => {
      if (themeId === this.state.themeId) {
        resolve();
        return;
      }
      if (!this.props.themes[themeId]) {
        reject();
        return;
      }
      this.animateStateChange({ themeId }).then(() => resolve());
    });

  getTheme = (themeId, config) => {
    const { themes } = this.props;
    const themeFn = themes[themeId] || themes.standard;
    return {
      ...themeFn(config),
      setTheme: this.setTheme,
      toggleReducedMotion: this.toggleReducedMotion
    };
  };

  render() {
    const { isTransitioning, themeId, ...config } = this.state;
    const theme = this.getTheme(themeId, config);
    return (
      <Fragment>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </Fragment>
    );
  }
}
