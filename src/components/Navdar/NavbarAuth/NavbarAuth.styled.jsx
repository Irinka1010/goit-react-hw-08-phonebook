import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: rgb(243, 249, 250);
  font-size: 1rem;
  letter-spacing: 0.0075em;
  font-weight: 500;
  line-height: 1.6;
  margin: 10px;

  padding: 5px;
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;
  &:hover:not(.active),
  &:focus:not(.active) {
    color: rgb(28, 28, 31);
  }
  &.active {
    color: rgb(28, 28, 31);
    box-shadow: rgb(222 20 185) 0px 0px 13px 3px;
  }
`;
