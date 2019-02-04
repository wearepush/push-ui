import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    primary: 'hotpink'
  }
};

const SomeText = styled.div`
  color: ${props => props.theme.colors.primary};
`;

export default class Test extends PureComponent {
  static propTypes = {
    theme: object.isRequired,
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme || theme}>
        <SomeText>some text</SomeText>
        <div css={theme => ({ color: theme.colors.primary })}>
          some other text
        </div>
      </ThemeProvider>
    );
  }
}
