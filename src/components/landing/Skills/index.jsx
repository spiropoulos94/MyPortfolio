import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>
          I have a deep interest in Front End technologies and and coding in
          general, and I am extremely fascinated by blazing fast Javascript
          frameworks like React JS. Passionate about solving problems, learning
          new skills and practically implementing them in daily tasks.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
