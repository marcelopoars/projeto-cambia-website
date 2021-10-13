import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type TextAlign = "left" | "right" | "center";

type HeadingProps = {
  color?: keyof typeof theme.colors;
  fontWeight?: 500 | 700 | 800;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fontSize?: number;
  fontSizeMobile?: number;
  textAlign?: TextAlign;
  textAlignMobile?: TextAlign;
  marginBottom?: number;
  marginBottomMobile?: number;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = "gray-900",
    fontSize,
    fontSizeMobile,
    fontWeight = 700,
    textAlign = "left",
    textAlignMobile,
    marginBottom,
    marginBottomMobile
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: 1.25;
    text-align: ${textAlign};
    margin-bottom: ${marginBottom}px;

    @media (max-width: 676px) {
      font-size: ${fontSizeMobile}px;
      text-align: ${textAlignMobile};
      margin-bottom: ${marginBottomMobile}px;
    }
  `}
`;
