import styled from '@emotion/styled';

export const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 35px;
  padding: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin: 0;

  &:hover,
  &:focus {
    border-color: blue;
  }
`;
