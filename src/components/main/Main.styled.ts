import styled from "styled-components";

export const MainText = styled.div`
  padding: 0 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.2px;
  font-size: 22px;
  color: ${(props) => props.theme.colors.secondary};

  @media and (min-width: 380px) and (max-width: 480px) {
    padding: 0 1.5rem;
    line-height: 36px;
    letter-spacing: 0.5px;
    font-size: 24px;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 840px) {
    letter-spacing: 1px;
    font-size: 38px;
    padding: 0 3rem;
    line-height: 50px;
    margin-bottom: 3rem;
  }
`;
