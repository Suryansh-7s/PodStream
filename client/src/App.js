import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'

const container = styled.div`
background-color: ${({ theme }) => theme.bg};
widht: 100%;
height: 100vh;
`;

function App(){
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <container>PodStream</container>
    </ThemeProvider>
  );
}

export default App;
