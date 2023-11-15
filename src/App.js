import { useState } from "react";
import Color from "./Color";

function App() {
  const [colorValue,setColorvalue] = useState('');
  const [hexCode,setHexcode] = useState('');
  const [isDark,setIsDark] = useState(true);

  
  return (
    <div className="App">
      <Color colorvalue = {colorValue} setcolor = {setColorvalue}
             hex = {hexCode} setHex = {setHexcode}
             dark = {isDark} setDark = {setIsDark}
      />
    </div>
  );
}

export default App;
