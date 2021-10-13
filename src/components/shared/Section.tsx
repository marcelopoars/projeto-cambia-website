import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { ElementProps } from "./ElementProps";

interface SectionProps extends ElementProps {
  paddingY?: number;
}

export const Section = styled("section").attrs<SectionProps>(({ as }) => ({
  as: as,
}))<SectionProps>`
  ${({ color = "gray-900", bgColor, marginBottom, paddingY }) => css`
    color: ${theme.colors[color]};
    background-color: ${theme.colors[bgColor]};
    margin-bottom: ${marginBottom}px;
    padding: ${paddingY}px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 676px) {
      margin-bottom: ${marginBottom / 2}px;
      padding: ${paddingY / 2}px 0;
    }
  `}

`;
