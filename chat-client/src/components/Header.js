import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  padding: 20px;
  width: 100vw;
  max-width: 600px;
  margin: auto;
`;

export const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};