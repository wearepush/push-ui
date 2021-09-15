import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { pxToRem } from '../../shared/global';

export const iconStyle = (props) =>
  css`
    --icon__size--xsmall: ${pxToRem(12)};
    --icon__size--small: ${pxToRem(16)};
    --icon__size--medium: ${pxToRem(20)};
    --icon__size--large: ${pxToRem(24)};
    --icon__size--xlarge: ${pxToRem(28)};

    display: var(--icon__display, inline-block);
    height: var(--icon__size--${props.size});
    width: var(--icon__size--${props.size});
  `;

export const StyledIcon = (c) => styled(c)`
  ${iconStyle};
`;

export default {
  StyledIcon,
};
