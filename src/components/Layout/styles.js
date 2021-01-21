import styled from "styled-components";

export const LandingStyle = styled.div`
  max-width: calc(100% - 50px);
  margin: 60px 0 0 auto;
  background-color: #f1f1f7;

  @media (max-width: 600px) {
    min-width: 100%;
  }
  main {
    min-height: calc(100vh - 60px);
    padding: 50px 70px;
    @media (max-width: 1000px) {
      padding: 50px;
    }
    @media (max-width: 600px) {
      padding: 20px;
    }
  }
`;
