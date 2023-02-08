import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 480px) {
    padding: 1rem 0;
    width: 90%;
  }
`;

export const Copyright = styled.p`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 14px;
  font-size: 10px;
  padding: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const CopyrightLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55vw;
  @media screen and (min-width: 480px) {
    width: 100vw;
  }
`;

export const RightDiv = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;
  @media screen and (min-width: 480px) {
    right: 4.25rem;
    bottom: 1.6rem;
  }
`;
