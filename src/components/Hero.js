import React from 'react';
import {
  DivStyled, H1Styled, H2Styled, Button, ButtonText, SearchText, ResultThumb,
} from './Hero.style';
import Table from './table.png';

function Hero() {
  return (
    <DivStyled>
      <H1Styled>No reactions to your reddit posts?</H1Styled>
      <H2Styled>
        Great timing, great results! Find the best time to post on your subreddit.
      </H2Styled>
      <Button to="/search?q=javascript"><ButtonText>SHOW ME THE BEST TIME</ButtonText></Button>
      <SearchText>r/javascript</SearchText>
      <ResultThumb to="/search?q=javascript">
        <img src={Table} alt="results-thumbnail" />
      </ResultThumb>
    </DivStyled>
  );
}

export default Hero;
