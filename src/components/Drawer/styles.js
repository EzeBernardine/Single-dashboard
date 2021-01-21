import styled from "styled-components";

export const DrawerStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 50px;
  width: 50px;
  .menu-Icon {
    position: absolute;
    top: 0;
  }
  .drawer-items {
    margin-top: 100px;
    @media (max-width: 600px) {
      display: none;
    }
    .icon-image {
        border-radius: 0;
    }
  }
`;
