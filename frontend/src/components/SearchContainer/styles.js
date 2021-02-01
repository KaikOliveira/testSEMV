import styled from 'styled-components';
import { shade } from 'polished';

export const SearchContainer = styled.div`
  height: 45%;
  width: 95%;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  margin-left: 2.5%;
  margin-top: 15px;
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
  margin-top: 5px;
`;

export const RowBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
  align-items: center;
  margin-top: 5px;
`;

export const BoxIdSearch = styled.div`
  width: 24%;
  height: 100%;
  margin-left: 20px;
`;

export const BoxContents = styled.div`
  width: 24%;
  height: 100%;
  flex-direction: column;
`;

export const Button = styled.button`
  background: #1976D2;
  height: 55%;
  border-radius: 10px;
  border: 0;
  color: #312e38;
  width: 12%;
  font-weight: 500;
  transition: background-color 0.2s;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  margin-top: 3%;

  &:hover {
    background: ${shade(0.2, '#1976D2')};
  }

  a {
    text-decoration: none;
    flex-direction: row;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
      margin-bottom: 3px;
      margin-left: 5px;
      font-size: 14px;
    }
  }
`;
