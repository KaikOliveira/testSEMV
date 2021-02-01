import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  height: 80%;
  width: 100%;
  background: #fff;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Status = styled.div`
  height: 7%;
  width: 33%;
  background: #eeeeee;
  margin-left: 2.5%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.3s;

  p {
    margin-left: 15px;
    color: #444;
    font-size: 14px;
  }

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: #bdbdbd;
  }
`;

export const SearchContainer = styled.div`
  height: 45%;
  width: 95%;
  background: #e0e0e0;
  border: 1px solid #bdbdbd;
  margin-left: 2.5%;
  margin-top: 15px;
`;

export const ListClients = styled.div`
  height: 37%;
  width: 95%;
  background: #ECECEC;
  margin-left: 2.5%;
  margin-top: 15px;
  overflow: scroll;
`;

export const SearchHeader = styled.h3`
  width: 100%;
  height: 30px;
  background: #bdbdbd;
  position: relative;
  display: flex;
  flex-direction: row;
  color: #333;
  border-bottom: 1px solid #ccc;

  p {
    height: 100%;
    width: 10%;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    border-right: 1px solid #9e9e9e;
    padding-top: 4px;
  }
`;

export const List = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
  list-style: none;
  width: 100%;
  background: #fff;
`;

export const InfosClient = styled.div`
  display: flex;
  flex-direction: row;
  transition: background-color 0.3s;
  background: #fff;
  color: #444;

  &:hover {
    background: #e0e0e0;
  }

  p {
    width: 10%;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    border-right: 1px solid #ccc;
  }
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

export const Confirm = styled.button`
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
  margin-top: 2%;

  p {
    color: #fff;
    margin-bottom: 3px;
    margin-left: 5px;
    font-size: 14px;
  }

  &:hover {
    background: ${shade(0.2, '#1976D2')};
  }
`;
