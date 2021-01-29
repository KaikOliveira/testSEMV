import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 22px;
  width: 60%;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #666360;
  display: flex;
  align-items: center;

  ${(props) => props.isFocused
    && css`
      color: #bbdefb;
      border-color: #bbdefb;
    `}
  ${(props) => props.isFilled
    && css`
      color: #bbdefb;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }

  }
`;
