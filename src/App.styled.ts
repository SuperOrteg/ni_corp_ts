import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: -webkit-fill-available;
  background-color: ${(props) => props.theme.colors.primary};
`;
