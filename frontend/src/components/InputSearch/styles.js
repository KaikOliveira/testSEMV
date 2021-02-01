import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 28px;
  width: 95%;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #333;
  display: flex;
  align-items: center;
  font-size: 16px;
  transition: border-color 0.1s;

  &:hover {
    border-color: #9e9e9e;
  }

  ${(props) => props.isFocused
    && css`
      color: #333;
      border-color: #bbdefb;
    `}
  ${(props) => props.isFilled
    && css`
      color: #333;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;

    &::placeholder {
      padding-left: 5px;
      color: #bbb;
      font-size: 14px;
    }
  }
`;
