import React from "react";
import Layout from "./layout";
import Container from "./ui/container";
import Banner from "./ui/banner";
import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
    };
  };
}
const StyledArticle = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  * {
    margin-top: 0;
    margin-bottom: 0;
  }

  * + * {
    margin-top: ${props => props.theme.spacing[1]};
  }

  .gatsby-resp-image-wrapper {
    margin: ${props => props.theme.spacing[2]} auto;
  }
`;
function Portfolio({ children, pageContext }: LayoutProps) {
  return (
    <Layout pageContext={pageContext}>
      <Banner title={pageContext.frontmatter.title} />
      <Container className="narrow">
        <StyledArticle>{children}</StyledArticle>
      </Container>
    </Layout>
  );
}

export default Portfolio;
