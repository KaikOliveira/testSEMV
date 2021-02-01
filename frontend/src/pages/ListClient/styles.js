import styled from 'styled-components';

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
