import useState from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";

const container = styled.div`
background-color: ${({ theme }) => theme.bg};
widht: 100%;
height: 100vh;
`;

function App(){
  return (    
  <div>
      <h1>PodStream</h1>
    </div>
  );
}

export default App;
