import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="My name is Nikos and I am a Junior Front End Developer!" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>
          I have a deep interest in Front End technologies and and coding in general, and I am extremely fascinated by
          blazing fast Javascript frameworks like React JS. Passionate about solving problems, learning new skills and
          practically implementing them in daily tasks.
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
