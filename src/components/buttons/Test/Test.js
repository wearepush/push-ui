import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { space, layout, color } from 'styled-system';

import themes from '../../../styles/themes';

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
    const _theme = Object.keys(theme).length ? theme : themes.standard();

    return (
      <SomeText {...this.props} theme={_theme}>some text</SomeText>
    );
  }
}

export default withTheme(Test);
