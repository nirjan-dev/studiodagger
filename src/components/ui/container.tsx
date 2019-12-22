import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 92%;
  margin: 0 auto;
  padding: 0 1rem;
  &.narrow {
    max-width: 70%;
  }

  @media (min-width: 90em) {
    max-width: 1600px;

    &.narrow {
      max-width: 960px;
    }
  }
`;

export default Container;
