import useState from "react";
import styled, { ThemeConsumer, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";

const container = styled.div`
background-color: ${({ theme }) => theme.bg};
widht: 100%;
height: 100vh;
`;

function App(){
  const [darkMode, setDarkMode] = useState(true);
  
  return (    
  <div>
    <ThemeProvider theme={lightTheme}>
      </ThemeProvider>
      </div>
  );
}

export default App;
