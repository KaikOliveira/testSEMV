import styled from 'styled-components';

export const Container = styled.div`
  height: 35%;
  width: 15%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-left: 3px;
  margin-top: 3.5px;
  border: 1px solid #bdbdbd;

  svg {
    margin-left: 45%;
  }

  &:hover {
    background: #ececec;
  }
`;
