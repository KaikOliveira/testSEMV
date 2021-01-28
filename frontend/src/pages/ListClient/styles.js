import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  height: 80%;
  width: 100%;
  background: coral;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Status = styled.div`
  height: 7%;
  width: 33%;
  background: azure;
  margin-left: 2.5%;
  margin-top: 15px;
`;

export const SearchContainer = styled.div`
  height: 45%;
  width: 95%;
  background: #808080;
  margin-left: 2.5%;
  margin-top: 15px;
`;

export const ListClients = styled.div`
  height: 37%;
  width: 95%;
  background: #123456;
  margin-left: 2.5%;
  margin-top: 15px;
`;

export const List = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
  list-style: none;
  width: 90%;
  background: #fff;
  border-radius: 20px;
  border: solid 0.3px #03A9F4;
  transition: background-color 0.3s;
  &:hover {
    background: #E1F5FE;
  }
`;

export const Name = styled.h3`
  text-align: center;
  font-weight: bold;
`;

export const AddressAndContact = styled.div`
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  p {
    font-size: 14px;
    bold{
      font-weight: 600;
    }
  }
`;
