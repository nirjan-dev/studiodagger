import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import logo from "../../images/logo/logo.png";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const StyledImage = styled(Img)`
  margin: 0.8rem;
`;

function NavBrand() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Link to="/">
      <h1 aria-hidden="true" className="hidden">
        Studio Dagger
      </h1>
      <StyledImage
        fluid={data.file.childImageSharp.fluid}
        alt="studio dagger"
      />
    </Link>
  );
}

export default NavBrand;
