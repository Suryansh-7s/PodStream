import { useState } from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme} from "./utils/Themes";
import Sidebar from "./components/Sidebar";

const container = styled.div`
  display: flex;
  background: ${({theme}) => theme.bg};
  width: 100%;
  height: 100vh;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <container>
        <Sidebar />
        PodStream
      </container>
    </ThemeProvider>
  );
}

export default App;