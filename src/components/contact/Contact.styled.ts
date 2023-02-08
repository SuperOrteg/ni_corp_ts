import styled from "styled-components";

export const MainDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 95vw;
  @media screen and (min-width: 480px) {
    width: auto;
  }
`;

const Words = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  margin: 0;
`;

export const Title = styled(Words)`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 12px;
  margin-left: 0.2rem;
`;

export const Mail = styled(Words)`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  display: inline-block;
  line-height: 54px;
  font-size: 32px;
  margin-bottom: 3rem;
  @media screen and (min-width: 480px) {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 72px;
    margin-bottom: 4rem;
    font-size: 70px;
  }
`;

interface CopyProps {
  readonly copied: string;
}

export const CopiedTooltip = styled.div<CopyProps>`
  opacity: 0.9;
  visibility: ${(props) => props.copied};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  border-radius: 6px;
  right: 10%;
  padding: 8px 10px;
  position: absolute;
  z-index: 1;
  margin-top: -20px;
  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px 10px;
    margin-top: -15px;
    right: 23%;
  }
`;
