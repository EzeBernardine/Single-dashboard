import styled from "styled-components";

export const ButtonStyles = styled.button`
  background: #ff5242;
  color: white;
  border-radius: 4px;
  white-space: nowrap;
  padding: 5px 15px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background: #df4c06;
  }
  @media (max-width: 950px) {
    & {
      padding: 3px 10px;
    }
  }
`;
