import React from "react";
import Container from "./container";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import styled from "@emotion/styled";

const PortfolioGrid = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-top: ${props => props.theme.spacing[5]};
  margin-bottom: ${props => props.theme.spacing[5]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.spacing[5]};

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: ${props => props.theme.spacing[4]};
    margin-top: 3rem;
  }
  .project-type {
    color: ${props => props.theme.colors.darkLight};
  }
  .project-title {
    margin: 0.2rem 0;
  }
  .project-thumbnail {
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 1;
      transform: scale(0.9);

      background: ${props => props.theme.colors.primaryGradient};
      opacity: 0;
      transition: 400ms cubic-bezier(0.39, 0.58, 0.57, 1);
    }
  }
  .project-link {
    .project-title {
      transition: color 200ms cubic-bezier(0.39, 0.58, 0.57, 1);
    }

    &:hover,
    &:active,
    &:focus {
      .project-title {
        color: ${props => props.theme.colors.primary};
      }

      .project-thumbnail::before {
        transform: scale(1);
        opacity: 0.6;
      }
    }
  }
`;

interface PortFolioListProps {
  title: string;
}

interface Project {
  frontmatter: {
    title: string;
    type: string;
    slug: string;
    thumbnail: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

function PortFolioList({ title }: PortFolioListProps) {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { publish: { eq: true } }
          fields: { collection: { eq: "portfolio" } }
        }
      ) {
        nodes {
          frontmatter {
            title
            type
            slug
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allMdx.nodes;
  return (
    <section>
      <Container>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <PortfolioGrid>
          {projects.map((project: Project) => (
            <li className="project" key={project.frontmatter.slug}>
              <Link
                className="project-link"
                to={`/${project.frontmatter.slug}`}
              >
                <Img
                  className="project-thumbnail"
                  fluid={project.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <p className="project-type">
                  <small>{project.frontmatter.type}</small>
                </p>
                <h3 className="project-title">{project.frontmatter.title}</h3>
              </Link>
            </li>
          ))}
        </PortfolioGrid>
      </Container>
    </section>
  );
}

export default PortFolioList;
