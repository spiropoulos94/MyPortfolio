import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hey, I am Nikos!</h1>
        <h4>I am a Junior Front-End Developer.</h4>
        <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I am Nikos, a Junior Front End developer" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
