import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterStyled = styled.footer`
  display: flex;
  padding: 0 250px;
  height: 100px;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  width: 36px;
  height: 36px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #636363;
  font-size: 14px;
  display: inline-block;
  flex: 1;
`;
export const FooterLinkStyled = styled(FooterLink)`
  flex: 1; /* fixes Safari related bug */
  text-align: right;
`;
