import styled from "styled-components";

export const DrawerStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 50px;
  width: 50px;
  z-index: 11;
  @media (max-width: 600px) {
    visibility: ${({ drawer }) => (drawer ? "visible !important" : "hidden")};
  }

  .menu-Icon {
    position: absolute;
    top: 0;
    cursor: pointer;
    visibility: visible;
    background: white;
  }
  .drawer-items {
    overflow: hidden;
    padding-top: 100px;
    height: 100%;
    transition: 300ms ease-in-out;
    background: white;
    @media (max-width: 600px) {
      width: ${({ drawer }) => (drawer ? "50px !important" : "0")};
    }
    .icon-image {
      border-radius: 0;
    }
    li:hover {
      background: #ff52421a;
      cursor: pointer
    }
  }

  .overflow {
    position: fixed;
    background: #06000061;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    margin: 0 0 0 auto;
    @media (min-width: 600px) {
      display: none;
    }
  }
`;
