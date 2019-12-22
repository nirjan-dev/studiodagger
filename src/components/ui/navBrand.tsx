import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const StyledImage = styled("img")`
  margin: 0.2rem;
  max-height: 60px;
`;

function NavBrand() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo/logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <Link to="/">
      <h1 aria-hidden="true" className="hidden">
        Studio Dagger
      </h1>
      <StyledImage src={data.file.publicURL} alt="studio dagger" />
    </Link>
  );
}

export default NavBrand;
