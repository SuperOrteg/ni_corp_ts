import { useState, useEffect } from "react";
import { gsap } from "gsap";

import {
  HeaderStyled,
  HeaderLeft,
  HeaderRight,
  HeaderLink,
  HeaderLogo,
  Switch,
  LogoWrap,
  LogoDiv,
  LogoDivBis,
} from "./Header.styled";

interface HeaderProps {
  toggleTheme: () => void;
}

function Header({ toggleTheme }: HeaderProps) {
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isHovered) {
        gsap.to(".logo1", {
          y: -54.5,
          duration: 0.2,
          ease: "slow(0.7, 0.7, false)",
        });
      }
    });
    return () => {
      ctx.revert();
    };
  }, [isHovered]);

  return (
    <HeaderStyled>
      <HeaderLeft>
        <LogoWrap
          onMouseEnter={() => setHovered(!isHovered)}
          onMouseLeave={() => setHovered(!isHovered)}
        >
          <LogoDiv className="logo1">
            <HeaderLogo to="/">ni corp.</HeaderLogo>
          </LogoDiv>
          <LogoDivBis className="logo1">
            <HeaderLogo to="/">ni corp.</HeaderLogo>
          </LogoDivBis>
        </LogoWrap>
      </HeaderLeft>
      <HeaderRight>
        <HeaderLink to="/contact">contact us</HeaderLink>
        <Switch>
          <input type="checkbox" onChange={toggleTheme}></input>
          <div>
            <span></span>
          </div>
        </Switch>
      </HeaderRight>
    </HeaderStyled>
  );
}

export default Header;
