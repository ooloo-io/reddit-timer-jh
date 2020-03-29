import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const H1Styled = styled.h1`
  font-family: Bitter;
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--gray-dark);
  margin-top: 27px;
  margin-bottom: 7px;
}
`;

export const H2Styled = styled.h2`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #93918f;
  margin-bottom: 46px;
`;

export const Button = styled(Link)`
  width: 217px;
  height: 36px;
  border-radius: 4px;
  background-color: #fdb755;
  margin: 0 auto;
  margin-bottom: 30px;
  text-decoration: none;
`;

export const ButtonText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const SearchText = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #93918f;
  margin-bottom: 36px;
`;

export const ResultThumb = styled(Link)`

`;
