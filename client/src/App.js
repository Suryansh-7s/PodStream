import { useState } from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme} from "./utils/Themes";

const container = styled.div`
  background: ${({theme}) => theme.bg};
  width: 100%;
  height: 100vh;
`;

function App() {
  const [theme, setDarkMode] = useState("true");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <container>
        PodStream
      </container>
    </ThemeProvider>
  );
}

export default App;