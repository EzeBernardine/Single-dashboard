import styled from "styled-components";

export const CardStyles = styled.section`
  margin: 50px 0 0 0;

  .card-container {
    .card {
      text-align: center;
      margin-bottom: 30px;
      .card-details {
        padding: 50px;
        .icon {
          padding: 10px;
        }
        h4 {
          margin: 15px 0;
        }
      }
      & div:last-child {
        flex: 1;
      }
      &:last-child {
        flex: 1;
      }
      &:first-child p {
        color: #04b004;
      }
      @media (max-width: 950px) {
        & {
          width: 100%;
          flex-direction: column;
          .card-details {
            width: 100%;
            flex-direction: column;
          }
        }
        & div:last-child {
          min-width: calc(50% - 10px);
          min-height: 200px;
        }
      }
    }
  }
`;
