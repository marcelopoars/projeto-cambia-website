import styled, { css } from "styled-components";
import { ElementProps } from "./ElementProps";

interface GridContainerProps extends ElementProps {
  gap?: number;
  alignItems?: string
}

export const GridContainer = styled("div").attrs<GridContainerProps>(
  ({ as }) => ({
    as: as,
  })
)<GridContainerProps>`
  ${({ gap, alignItems, marginBottom }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${gap}px;
    align-items: ${alignItems};

    margin-bottom: ${marginBottom}px;

    @media (max-width: 676px) {
      gap: ${gap / 2}px;

      margin-bottom: ${marginBottom / 2}px;
    }
  `}
`;
