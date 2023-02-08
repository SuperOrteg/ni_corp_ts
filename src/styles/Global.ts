import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`

    --shadow-blur: 0px;

body {
    margin: 0;
    overflow: hidden;
}

a {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
}

`;
