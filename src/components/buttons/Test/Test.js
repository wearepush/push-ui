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

export class BaseTest extends PureComponent {
  render() {
    return (
      <SomeText {...this.props}>some text</SomeText>
    );
  }
}

BaseTest.defaultProps = {
  theme: themes.standard(),
};

export default withTheme(BaseTest);
