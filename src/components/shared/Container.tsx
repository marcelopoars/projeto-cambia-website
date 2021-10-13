import styled, { css } from "styled-components";
import { ElementProps } from "./ElementProps";

// interface ContainerProps extends ElementProps {}

export const Container = styled("div").attrs<ElementProps>(({ as }) => ({
  as: as,
}))<ElementProps>`
  ${({ maxWidth, textAlign }) => css`
    width: 100%;
    max-width: ${maxWidth}px;
    padding: 0 48px;
    text-align: ${textAlign};

    @media (max-width: 676px) {
      padding: 0 24px;
    }
  `}
`;
