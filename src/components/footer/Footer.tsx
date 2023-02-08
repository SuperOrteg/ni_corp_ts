import { useEffect } from "react";
import { gsap } from "gsap";

import {
  FooterStyled,
  Copyright,
  RightDiv,
  LeftDiv,
  CopyrightLink,
} from "./Footer.styled";
import Logo from "../logo/Logo";

const Footer = () => {
  const tl = gsap.timeline({ repeat: -1 });

  useEffect(() => {
    gsap.context(() => {
      tl.to("#rotate", {
        rotation: "+=360",
        ease: "none",
        duration: 7,
      });
    });
  }, []);

  const onEnter = () => {
    tl.pause();
    gsap.to("#rotate,#spotify", {
      scale: 1.05,
      ease: "none",
      duration: 0.1,
      "--shadow-blur": "0.5px",
    });
  };

  const onLeave = () => {
    tl.play();
    gsap.to("#rotate,#spotify", {
      scale: 1,
      ease: "none",
      duration: 0.1,
      "--shadow-blur": "0px",
    });
  };

  return (
    <FooterStyled>
      <LeftDiv>
        <Copyright>
          © 2022 ni corp. - Designed and developed by{" "}
          <CopyrightLink
            href="https://github.com/SuperOrteg"
            target="_blank"
            rel="noreferrer"
          >
            Antoine
          </CopyrightLink>
        </Copyright>
      </LeftDiv>
      <RightDiv onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <a
          href="https://open.spotify.com/playlist/6GOiZ4EkMxiAPTxo0Sck6G"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </RightDiv>
    </FooterStyled>
  );
};

export default Footer;
