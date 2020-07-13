import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Wrapper, Grid, Item, Title, Description, Link } from './styles';

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              link
              status
            }
          }
        }
      }
    }
  `);

  const projectsNodeArray = data.allMarkdownRemark.edges;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
        <span style={{ color: 'red' }}>In Progress</span>
        <span style={{ color: 'green' }}>Completed</span>
      </div>
      <Wrapper id="projects">
        <Grid>
          {projectsNodeArray.map(({ node }) => (
            <Item key={uuidv4()}>
              <Card>
                <Title>{node.frontmatter.title}</Title>

                <Description>{node.frontmatter.description}</Description>
                {node.frontmatter.status === 'finished' ? (
                  <p style={{ fontSize: '1.001em', color: 'green' }}>(Completed)</p>
                ) : (
                  <p style={{ fontSize: '1.001em', color: 'red' }}>(In progress)</p>
                )}
                <Link>
                  <a href={node.frontmatter.link} target="_blank">
                    Go to project page
                  </a>
                </Link>
              </Card>
            </Item>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
};
