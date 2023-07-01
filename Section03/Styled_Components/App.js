import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0.5rem;
  }
`;

const Practice = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background: powderblue;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Practice>Practice!</Practice>
    </>
  );
}
