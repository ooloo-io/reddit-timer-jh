import React from 'react';
import { ReactComponent as Sign } from './sign.svg';
import {
  FooterStyled, LogoLink, FooterLink, FooterLinkStyled,
} from './Footer.style';

function Footer() {
  return (
    <FooterStyled>
      <FooterLink as="a" href="https://ooloo.io" target="_blank">ooloo.io</FooterLink>
      <LogoLink to="/">
        <Sign />
      </LogoLink>
      <FooterLinkStyled to="/terms">Terms & Privacy</FooterLinkStyled>
    </FooterStyled>
  );
}

export default Footer;
