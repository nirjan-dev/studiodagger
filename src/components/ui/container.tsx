import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 0 1rem;
  &.narrow {
    width: 100%;
    max-width: 800px;
  }

  @media (min-width: 90em) {
    max-width: 1600px;

    &.narrow {
      max-width: 960px;
    }
  }
`;

export default Container;
