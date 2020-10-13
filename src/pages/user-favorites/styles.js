import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 135px;
  width: 950px;

  h4 {
      text-align: center;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    width: 100vw;

    h3 {
      text-align: center;
    }
  }
`;

export const ResultSearch = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: start;
  }
`;