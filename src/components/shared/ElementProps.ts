import { ReactNode } from "react";
import { theme } from "../../styles/theme";

export interface ElementProps {
  as?: string;
  children?: ReactNode;
  maxWidth?: number;
  height?: number
  color?: keyof typeof theme.colors;
  bgColor?: keyof typeof theme.colors;
  marginBottom?: number;

  textAlign?: 'left' | 'right' | 'center';
}
