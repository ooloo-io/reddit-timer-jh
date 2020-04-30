import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  HeroWrapper, SplashTitle, SplashSubtitle, Button, SearchText, Theme,
} from './Hero.style';
import Table from './table.png';


function Hero() {
  return (
    <ThemeProvider theme={Theme}>
      <HeroWrapper>
        <SplashTitle>No reactions to your reddit posts?</SplashTitle>
        <SplashSubtitle>
          Great timing, great results! Find the best time to post on your subreddit.
        </SplashSubtitle>
        <Button to="/search?q=javascript">SHOW ME THE BEST TIME</Button>
        <SearchText>r/javascript</SearchText>
        <Link to="/search?q=javascript">
          <img src={Table} alt="results-thumbnail" />
        </Link>
      </HeroWrapper>
    </ThemeProvider>
  );
}

export default Hero;
