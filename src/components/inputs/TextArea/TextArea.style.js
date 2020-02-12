import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { sizeVariant, inputStyle } from "../TextField/TextField.style";

const textAreaStyle = () =>
  css`
    resize: vertical;
  `;

export const StyledTextArea = styled.textarea`
  ${inputStyle}
  ${textAreaStyle}
  ${sizeVariant}
`;

export default {
  StyledTextArea
};
