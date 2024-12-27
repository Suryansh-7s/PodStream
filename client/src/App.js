import { useState } from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme} from "./utils/Themes";

const container = styled.div`
  background: ${({theme}) => theme.bg};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
`;

function App() {
  const [theme, setTheme] = useState("true");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <container>
        PodStream
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </container>
    </ThemeProvider>
  );
}

export default App;