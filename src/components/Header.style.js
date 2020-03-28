import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderStyled = styled.header`
  padding: 0 80px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-self: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #636363;
  font-size: 16px;
  display: inline-block;
  margin-left: 26px;
`;

export const LogoLink = styled(Link)`
    margin-top: -2px;
    width: 150px;
    height: 36px;
    align-self: center;
`;
