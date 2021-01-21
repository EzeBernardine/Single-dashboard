import styled from "styled-components";

export const Header1 = styled.h1`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 1.7rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const Header2 = styled.h3`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 1.5rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

export const Header3 = styled.h3`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 1.3rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Header4 = styled.h4`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;
export const Header5 = styled.h5`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const Header6 = styled.h6`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  font-size: .8rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Paragraph = styled.p`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 0.95rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "350")};
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const Bold = styled.b`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 0.95rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 0.8rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "350")};
`;

export const Small = styled.small`
  color: ${({ color }) => (color ? color : " #818e94")};
  font-size: 0.75rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "350")};
`;
