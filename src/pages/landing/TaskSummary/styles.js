import styled from "styled-components";

export const TaskSummaryStyles = styled.div`
  & > h1 {
    margin: 50px 0;
  }
  .summary-main {
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  }

  .summary-left {
    position: relative;
    .qeustionMark,
    .viewMore {
      position: absolute;
      top: 20px;
      svg {
        fill: #d9d7d7;
      }
    }
    .qeustionMark {
      left: 20px;
    }
    .viewMore {
      right: 20px;
      cursor: pointer;
    }
    .summary-list {
      padding: 30px;
      position: relative;
      width: 45%auto;
      &:after {
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        height: 40%;
        width: 1px;
        background: #eee;
        position: absolute;
        margin: auto;
      }
      @media (max-width: 1200px) {
        &:after {
          content: "";
          top: auto;
          left: 0;
          width: 40%;
          height: 1px;
        }
      }
      ul li {
        padding: 5px 7px;
        border-radius: 20px;
        div span:nth-child(2) {
          padding-left: 15px;
        }
        &:hover {
          background: #defbde;
          cursor: pointer;
          * {
            color: #04b004;
          }
        }
      }
    }
    .total-amount {
      padding: 30px;
      b {
        font-size: 3rem;
      }
      small {
        margin: 15px 0;
      }
    }
    @media (max-width: 1200px) {
      flex-direction: column;
      & .summary-list,
      .total-amount {
        width: 100%;
      }
    }
  }
`;
