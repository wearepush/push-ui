import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { pxToRem } from '../../shared/global';

export const iconStyle = (props) =>
  css`
    --icon--size--xsmall: ${pxToRem(10)};
    --icon--size--small: ${pxToRem(16)};
    --icon--size--medium: ${pxToRem(24)};
    --icon--size--large: ${pxToRem(36)};
    --icon--size--xlarge: ${pxToRem(48)};

    display: var(--icon__display, inline-block);
    height: var(--icon--size--${props.size});
    width: var(--icon--size--${props.size});
  `;

export const StyledIcon = (c) => styled(c)`
  ${iconStyle};
`;

export default {
  StyledIcon,
};
