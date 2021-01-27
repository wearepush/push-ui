import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { inputStyle } from '../TextField/TextField.style';

const textAreaStyle = (props) =>
  css`
    resize: vertical;
    padding: var(--input--padding--${props.size});
    font-size: var(--input--fontsize--${props.size});
  `;

export const StyledTextArea = styled.textarea`
  ${inputStyle}
  ${textAreaStyle}
`;

export default {
  StyledTextArea,
};
