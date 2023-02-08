import { DefaultTheme } from "styled-components";

const greenTheme: DefaultTheme = {
  colors: {
    primary: "#127C67",
    lightPrimary: "rgba(18, 124, 103, 0.5)",
    lighterPrimary: "rgba(18, 124, 103, 0.4)",
    secondary: "#DDFFFF",
    lightSecondary: "rgba(221, 255, 255, 0.5)",
    lighterSecondary: "rgba(221, 255, 255, 0.4)",
  },
};

const blueTheme: DefaultTheme = {
  colors: {
    primary: "#DDFFFF",
    lightPrimary: "rgba(221, 255, 255, 0.5)",
    lighterPrimary: "rgba(221, 255, 255, 0.4)",
    secondary: "#127C67",
    lightSecondary: "rgba(18, 124, 103, 0.5)",
    lighterSecondary: "rgba(18, 124, 103, 0.4)",
  },
};

export { greenTheme, blueTheme };
