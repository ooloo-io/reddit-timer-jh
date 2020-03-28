import React from 'react';
import { ReactComponent as Sign } from './sign.svg';
import {
  FooterStyled, LogoLink, FooterLink,
} from './Footer.style';

function Footer() {
  return (
    <FooterStyled>
      <FooterLink as="a" href="https://ooloo.io" target="_blank">ooloo.io</FooterLink>
      <LogoLink to="/">
        <Sign />
      </LogoLink>
      <FooterLink style={{ 'text-align': 'right' }} to="/terms">Terms & Privacy</FooterLink>
    </FooterStyled>
  );
}

export default Footer;
