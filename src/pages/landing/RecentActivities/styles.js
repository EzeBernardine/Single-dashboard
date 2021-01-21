import styled from "styled-components";

export const ActivityStyles = styled.section`
  margin: 0 0 30px 0;
  h6 {
    margin: 0;
  }
  .card-container {
    text-align: center;
    .card-details {
      padding: 50px;
      @media (max-width: 950px) {
        width: 100%;
      }
      .icon {
        padding: 10px;
      }
      h4 {
        margin: 15px 0;
      }
    }

    .activities-log {
      overflow: auto;
      scrollbar-color: #e3e3e3 transparent;
      scrollbar-width: thin;
      margin: 0 -70px 0 20px;
      @media (max-width: 1000px) {
        margin: 0 -48px 0 20px;
      }
      @media (max-width: 950px) {
        margin: 20px 0 0;
      }
      .activity-container {
        margin: 0 10px;
        min-height: 200px;
        & > div {
          padding: 10px;
          .PictureFrame {
            margin-right: 7px;
          }
        }
        &:hover {
          box-shadow: 0 2px 5px -2px #c4c8ca;
          transform: translateY(-2px);
          transition: 100ms linear;
        }
      }
    }

    @media (max-width: 950px) {
      flex-direction: column;
    }
  }
`;
