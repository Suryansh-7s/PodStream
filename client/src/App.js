import useState from "react";
import styled, { ThemeConsumer } from "styled-components";
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
    <ThemePro<h1>PodStream</h1>
    </div>
  );
}

export default App;
