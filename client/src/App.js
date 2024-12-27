import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import styled from 'styled-components';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    </ThemeProvider>

  );
}

export default App;