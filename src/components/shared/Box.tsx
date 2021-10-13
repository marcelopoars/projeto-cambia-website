import styled, { css } from "styled-components";
import { ElementProps } from "./ElementProps";

interface BoxProps extends ElementProps {
  display?: string
  alignItems?: string
  justifyContent?: string
}

export const Box = styled("div").attrs<BoxProps>(({ as }) => ({
  as: as,
}))<BoxProps>`
  ${({ height, marginBottom, display, alignItems, justifyContent }) => css`
    width: 100%;
    height: ${height}px;
    margin-bottom: ${marginBottom}px;

    display: ${display};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`;
