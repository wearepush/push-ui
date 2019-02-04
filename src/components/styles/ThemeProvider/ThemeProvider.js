import React, { Component, Fragment } from 'react';
import { node, object } from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

export default class ThemeProvider extends Component {
  static propTypes = {
    children: node.isRequired,
    theme: object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <EmotionThemeProvider theme={this.props.theme}>
          {this.props.children}
        </EmotionThemeProvider>
      </Fragment>
    );
  }
}
