import styled from "styled-components";

export const MenuIconStyle = styled.div`
  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    .menuIcon-container {
      width: 25px;
      height: 18px;

      .menuIcon-div {
        grid-gap: 7px;
        width: 15px;
        height: 2px;
        top: 9px;
        background: ${({ color }) => (color ? color : "white")};
        align-items: center;
        position: relative;

        @media (max-width: 600px) {
          visibility: ${({ showMenuDropdown }) =>
            showMenuDropdown ? "hidden " : "unset"};
        }
      }
      .menuIcon-div::before,
      .menuIcon-div::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 2px;
        background: ${({ color }) => (color ? color : "white")};
        visibility: visible;
        bottom: 0;
        right: 0;
        left: 0;
        transition: 250ms linear;
      }
      .menuIcon-div::before {
        top: -5px;
      }
      .menuIcon-div::after {
        top: 5px;
      }
      @media (max-width: 600px) {
        .menuIcon-div::before {
          top: ${({ showMenuDropdown }) => (showMenuDropdown ? "0" : "-5px")};
          transform: ${({ showMenuDropdown }) =>
            showMenuDropdown ? "rotate(45deg) " : "none"};
        }
        .menuIcon-div::after {
          top: ${({ showMenuDropdown }) => (showMenuDropdown ? "0" : "5px")};
          transform: ${({ showMenuDropdown }) =>
            showMenuDropdown ? "rotate(-45deg)" : "none"};
        }
      }
    }
  }
`;
