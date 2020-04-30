import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Theme = {
  grayBase: '#93918f',
};

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SplashTitle = styled.div`
  font-family: Bitter;
  font-size: 38px;
  color: #000000;
  margin-top: 29px;
  margin-bottom: 23px;
}
`;

export const SplashSubtitle = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.grayBase};
  margin-bottom: 44px;
`;

export const Button = styled(Link)`
  width: 217px;
  height: 36px;
  border-radius: 4px;
  background-color: #fdb755;
  margin: 0 auto;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 36px;
  margin-bottom: 47px;
`;

export const SearchText = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.grayBase};
  margin-bottom: 36px;
`;
