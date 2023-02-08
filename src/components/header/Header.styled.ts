import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoDiv = styled.div``;

export const LogoDivBis = styled.div`
  position: absolute;
`;

export const LogoWrap = styled.div`
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

export const HeaderStyled = styled.header`
  padding: 1.5rem 0;
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 480px) {
    width: 90%;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLeft = styled.div``;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const HeaderLogo = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 900;

  @media screen and (min-width: 480px) {
    font-size: 36px;
  }
`;

export const Switch = styled.label`
  margin-left: 1rem;

  @media screen and (min-width: 480px) {
    margin-left: 2rem;
  }
  margin-top: -4.5px;
  --dot: ${(props) => props.theme.colors.primary};
  --circle: ${(props) => props.theme.colors.primary};
  --duration: 0.2s;
  --text: #9ea0be;
  --shadow: 0 1px 3px ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  position: relative;
  &:before {
    content: "";
    width: 60px;
    height: 32px;
    border-radius: 16px;
    background: ${(props) => props.theme.colors.secondary};
    position: absolute;
    left: 0;
    top: 0;
  }
  input {
    display: none;
    & + div {
      position: relative;
      &:before,
      &:after {
        --s: 1;
        content: "";
        position: absolute;
        height: 4px;
        top: 14px;
        width: 24px;
        transform: scaleX(var(--s));
        transition: transform var(--duration) ease;
      }
      &:before {
        --s: 0;
        left: 4px;
        transform-origin: 0 50%;
        border-radius: 2px 0 0 2px;
      }
      &:after {
        left: 32px;
        transform-origin: 100% 50%;
        border-radius: 0 2px 2px 0;
      }
      span {
        padding-left: 60px;
        line-height: 28px;
        color: var(--text);
        &:before {
          --x: 0;
          --b: var(--circle);
          --s: 16px;
          content: "";
          position: absolute;
          left: 4px;
          top: 4px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          box-shadow: inset 0 0 0 var(--s) var(--b);
          transform: translateX(var(--x));
          transition: box-shadow var(--duration) ease,
            transform var(--duration) ease;
        }
        &:not(:empty) {
          padding-left: 68px;
        }
      }
    }
    &:checked {
      & + div {
        &:before {
          --s: 1;
        }
        &:after {
          --s: 0;
        }
        span {
          &:before {
            --x: 28px;
            --s: 12px;
            --b: var(--dot);
          }
        }
      }
    }
  }
`;
