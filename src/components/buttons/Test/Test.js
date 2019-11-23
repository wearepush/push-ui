import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { space, layout, color } from 'styled-system';
import { theme as defaultTheme } from '../../styles';

const SomeText = styled.div`
  color: ${props => {
    return props.theme.colors.primary;
  }};
  ${color};
  ${space};
  ${layout};
`;

export class Test extends PureComponent {
  render() {
    const { theme } = this.props;
    const _theme = Object.keys(theme).length ? theme : defaultTheme;
    return (
      <SomeText {...this.props} theme={_theme}>some textasd!!!+++222</SomeText>
    );
  }
}

export default withTheme(Test);
