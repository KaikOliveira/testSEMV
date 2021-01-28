import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  flex: 1;
  background: coral;
  height: 100px;
  justify-content: space-between;
`;

export const Logo =  styled.div`
  width: 15%;
  height: 100%;
  background: aquamarine;
`;

export const Content =  styled.div`
  width: 85%;
  height: 100%;
  background: aliceblue;
  flex-direction: column;
`;

export const LineTop = styled.div`
  background: aqua;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;  
`;

export const BoxLeft = styled.div`
  background: #c54040;
  width: 25%;
  display: flex;
  flex-direction: row;
`;

export const Admin = styled.div`
  width: 50%;
  background: #ff9050;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quit = styled.div`
  width: 50%;
  background: #808080;
  display: flex;
  align-items: center;
  justify-content: center
`;

export const BoxLeftLabel = styled.p`
  color: #fff;
  margin-left: 5px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
`;