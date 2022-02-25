import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import { UsersContextProvider } from "./context/UsersContext";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <UsersContextProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header setTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        <Container />

        <GlobalStyle />
      </ThemeProvider>
    </UsersContextProvider>
  );
}

export default App;
