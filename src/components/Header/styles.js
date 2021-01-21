import styled from "styled-components";

export const HeaderStyles = styled.header`
  box-shadow: 1px 1px 2px #00000005;
  max-width: calc(100% - 50px);
  margin: 0 0 0 auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 10;
  .header-container {
    height: 60px;
  }
  .header-left {
    padding: 0 0 0 5%;
    @media (max-width: 950px) {
      padding: 0 0 0 5%;
    }
    @media (max-width: 600px) {
      padding: 0 0 0 0%;
    }
  }

  .search-container {
    .search-icon {
      display: inline-flex;
      svg {
        stroke: #818e94;
      }
    }
    @media (max-width: 600px) {
      width: auto;
    }
  }

  .btn-container {
    margin: 0 5%;
    @media (max-width: 950px) {
      margin: 0 0 0 5%;
    }
  }

  .list-item-container {
    ul {
      display: inline-flex;
      font-size: 14px;
      color: #818e94;
      li {
        margin: 0 10px;
        white-space: nowrap;
        @media (max-width: 1100px) {
          font-size: 12px;
        }
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    @media (max-width: 950px) {
      & {
        display: none;
      }
    }
  }

  .header-right {
    padding: 0 20px;
    @media (max-width: 950px) {
      padding: 0 7% 0 0;
    }
    .profile-image-container {
      margin: 0 20px;
      @media (max-width: 950px) {
        margin: 0 10px 0 20px;
      }
    }
    .setting {
      margin-left: 20px;
      @media (max-width: 600px) {
        display: none;
      }
    }
    .menu-Icon {
      margin-left: 20px;
      position: relative;
      cursor: pointer;
      @media (min-width: 950px) {
        display: none;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }

      @keyframes rollDown {
        0% {
          height: 0;
          padding: 0px 0;
        }
        100% {
          padding: 20px 0;
          height: 220px;
        }
      }
      @keyframes rollUp {
        0% {
          height: 220px;
          padding: 20px 0;
        }
        100% {
          height: 0;
          padding: 0 0;
          visibility: hidden;
        }
      }

      .dropdown-menu {
        height: 0;
        padding: 0;
        overflow: hidden;
        animation: ${(props) =>
          props.menu === undefined
            ? "none"
            : props.menu
            ? "rollDown .2s ease-in-out forwards"
            : "rollUp .2s  ease-in-out forwards"};
        position: absolute;
        background: white;
        width: max-content;
        right: -5px;
        top: 39px;
        box-shadow: 0 2px 5px -2px #c4c8ca;
        @media (min-width: 950px) {
          display: none;
        }
        ul {
          display: grid;
          li {
            padding: 7px 25px;
            font-size: 12px;
            color: #818e94;
            &:hover {
              background: #ff52421a;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
