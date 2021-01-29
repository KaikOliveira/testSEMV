import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  padding-left: 30px;
  margin-top: 10px;
  background: #fff;

  p {
    color: #ff5252;
    margin-top: 5px;
    font-size: 13px;
    margin-left: 5px;
  }
`;

export const BoxButton = styled.div`
  width: 25%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const Confirm = styled.button`
  background: #43a047;
  height: 50px;
  border-radius: 10px;
  border: 0;
  color: #312e38;
  width: 45%;
  font-weight: 500;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 10px;
  transition: background-color 0.2s;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    margin-bottom: 3px;
    font-size: 14px;
  }

  &:hover {
    background: ${shade(0.2, '#43a047')};
  }
`;

export const Cancel = styled.button`
  background: #e53935;
  height: 50px;
  border-radius: 10px;
  border: 0;
  color: #312e38;
  width: 45%;
  font-weight: 500;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 10px;
  transition: background-color 0.2s;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    margin-bottom: 6px;
    font-size: 14px;
  }

  &:hover {
    background: ${shade(0.2, '#e53935')};
  }
`;
