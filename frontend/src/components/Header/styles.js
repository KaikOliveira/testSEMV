import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;
  border-bottom: 0.5px solid #E0E0E0;
`;

export const Logo = styled.div`
  width: 15%;
  height: 100%;
  background: aquamarine;
`;

export const Content = styled.div`
  width: 85%;
  height: 100%;
  flex-direction: column;
`;

export const LineTop = styled.div`
  background: #1976D2;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`;

export const BoxLeft = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
      margin-left: 5px;
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-weight: 600;
      margin-top: 5px;
    }
  }
`;

export const LineBottom = styled.div`
  background: #FAFAFA;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 22px;
    margin-left: 10px;
    color: #333;
  }

  div {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
    }

    p {
      font-size: 14px;
      font-family: Roboto, sans-serif;
      margin-top: 2px;
      color: #333;
    }

    pre {
      margin-left: 5px;
      color: #666;
      font-size: 14px;
      font-family: Roboto, sans-serif;
    }

    a {
      text-decoration: none;
      color: #666;
      font-size: 14px;
      font-family: Roboto, sans-serif;
      margin-top: 1px;
      margin-left: 5px;
      transition: 1s;

      &:hover {
        color: #999;
      }
    }
  }
`;
