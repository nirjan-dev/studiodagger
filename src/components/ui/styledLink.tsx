import styled from '@emotion/styled';
import { Link } from 'gatsby';
const StyledLink = styled(Link)`
  background: ${props => props.theme.colors.primaryGradient};
  border: none;
  padding: 0.8rem 1.5rem;
  color: ${props => props.theme.colors.light};
  border-radius: 5px;
  box-shadow: 0px 4px 3px 0px rgba(50, 50, 50, 0.2);
  opacity: 0.9;
  transition: all 200ms cubic-bezier(0.08, 0.82, 0.17, 1);
  display: inline-block;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0px 5px 3px 0px rgba(50, 50, 50, 0.3);
    opacity: 1;
    transform: scale(1.025);
    color: ${props => props.theme.colors.light};
  }
`;

export default StyledLink;
