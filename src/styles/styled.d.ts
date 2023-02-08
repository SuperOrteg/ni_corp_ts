import "styled-components";

interface ThemeColors {
  primary: string;
  lightPrimary: string;
  lighterPrimary: string;
  secondary: string;
  lightSecondary: string;
  lighterSecondary: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
  }
}
