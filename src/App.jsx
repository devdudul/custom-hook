import { useState } from "react";

import "./App.css";
import Content from "./Content";
import Navbar from "./Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      Hi
      <Content />
      <Content />
      <Content />
    </>
  );
}

export default App;
