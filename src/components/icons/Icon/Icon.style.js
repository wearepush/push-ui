import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const iconStyle = (props) =>
  css`
    display: inline-block;
    --icon--size--xs: 1rem;
    --icon--size--sm: 2rem;
    --icon--size--md: 3rem;
    --icon--size--lg: 4rem;
    --icon--size--xl: 5rem;
    width: var(--icon--size--${props.size});
    height: var(--icon--size--${props.size});

    --icon--fill--black: #2D2D3C;
    --icon--fill--dark-orange: #C13A23;
    fill: var(--icon--fill--${props.fill})
  `;

export const StyledIcon = (c) => styled(c)`
  ${iconStyle};
`;

export default {
  StyledIcon,
};
