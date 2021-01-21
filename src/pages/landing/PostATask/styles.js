import styled from "styled-components";

export const PostATaskStyles = styled.div`
  .qeustionMark {
    position: absolute;
    top: 20px;
    left: 20px;
    svg {
      fill: #d9d7d7;
    }
  }

  .main-container {
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
      align-content: center
    }
  }
  .left-container {
    position: relative;
    padding: 30px;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }

  .postATask-text {
    border-right: 1px solid #eee;
    padding-right: 30px;
    text-align: center;
    @media (max-width: 1100px) {
      border-right: none;
      border-bottom: 1px solid #eee;
      padding: 0 0 30px 0;
      width: 100%;
    }
    & > div {
      padding: 15px 0;
    }
    .task-box {
      padding: 10px;
    }
  }
  .post-icons {
    padding-left: 30px;
    min-width: 70%;
    @media (max-width: 1100px) {
      padding: 30px 0 0 0;
      width: 100%
      /* min-width: 100%; */
    }
    .icon-wrap {
      padding: 10px;
    }
    small {
      padding: 11px 0;
    }
    & > div:hover {
      .icon-wrap {
        box-shadow: 0 0 5px -2px #c4c8ca;
      }
    }
  }

  .right-container {
    position: relative;
    padding: 30px;
    @media (max-width: 750px) {
      width: max-content;
      order: -1;
    }
    .edit {
      position: absolute;
      top: -10px;
      box-shadow: 0 2px 5px -2px #c4c8ca;
      right: -10px;
      padding: 7px;
    }
    .profile-image {
      padding: 7px;
    }
    .profile-text {
      padding: 15px 0;
    }
    .profile-Status {
      .profile-checked {
        svg {
          fill: #ff5242;
        }
      }
      .profile-unchecked {
        svg {
          fill: #04b004;
        }
      }
      li {
        font-size: 12px;
        padding: 5px;
        color: #818e94;
      }
    }
  }
`;
