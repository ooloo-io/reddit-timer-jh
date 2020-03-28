import React from 'react';
import { ReactComponent as Sign } from './sign.svg';
import {
  FooterStyled, LogoLink, FooterLink, FooterA,
} from './Footer.style';

function Footer() {
  return (
    <FooterStyled>
      <FooterA href="https://ooloo.io" target="_blank">ooloo.io</FooterA>
      <LogoLink to="/">
        <Sign />
      </LogoLink>
      <FooterLink to="/terms">Terms & Privacy</FooterLink>
    </FooterStyled>
  );
}

export default Footer;
