import React from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primaryGradient};
  .banner-title {
    color: ${props => props.theme.colors.light};
    margin: 0;
  }
`;
interface BannerProps {
  title: string;
}
function Banner({ title }: BannerProps) {
  return (
    <StyledSection>
      <h2 className="banner-title">{title}</h2>
    </StyledSection>
  );
}

export default Banner;
