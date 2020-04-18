import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const iconStyle = () =>
  css`
    display: inline-block;
  `;

export const StyledIcon = (c) => styled(c)`
  ${iconStyle};
`;

export default {
  StyledIcon,
};
