import { useState } from "react";

import "./App.css";
import Content from "./Content";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hi
      <Content />
    </>
  );
}

export default App;
