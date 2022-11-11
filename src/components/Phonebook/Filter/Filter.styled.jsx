import styled from '@emotion/styled';

export const Blok = styled.div`
  /* text-align: center; */
`;
export const Label = styled.label`
  font-weight: 400;
`;
export const Input = styled.input`
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 60px;
  width: 100%;

  &:hover,
  &:focus {
    border-color: blue;
  }
`;
