import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { space, layout, color } from 'styled-system';
import theme from './theme';

const SomeText = styled.div`
  color: ${props => {
    return props.theme.colors.primary;
  }};
  ${color};
  ${space};
  ${layout};
`;

export default class Test extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SomeText {...this.props}>some text</SomeText>
      </ThemeProvider>
    );
  }
}
