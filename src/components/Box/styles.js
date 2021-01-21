import styled from "styled-components";

export const Flex = styled("div")`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  flex-direction: ${(props) => props.flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  min-width: ${({ min, width }) => min && width};
  min-height: ${({ min, height }) => min && height};
  max-width: ${({ max, width }) => max && width};
  max-height: ${({ max, height }) => max && height};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  & > * {
    min-width: 0;
  }
`;

export const PictureFrame = styled.div`
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  border-radius: 100%;
  overflow: hidden;
  background: ${({ bgColor }) => bgColor && bgColor};
  img,
  svg {
    height: 100%;
    width: 100%;
    object-fit: ${({ objFit }) => objFit || "cover"};
    color: ${({ color }) => color && color};
  }
`;
