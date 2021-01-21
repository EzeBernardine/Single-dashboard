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
    width: auto
    }
  }

  .btn-container {
    margin: 0 5%;
    @media (max-width: 950px) {
      margin: 0;
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
      @media (min-width: 950px) {
        display: none;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;
