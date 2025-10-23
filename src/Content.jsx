import React from "react";
import { useState, useEffect } from "react";
import useMyFetch from "./useMyFetch";
import Footer from "./Footer";
const Content = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <h1>Content</h1>
      <h2>footer will be added</h2>
      <Footer />
    </div>
  );
};

export default Content;
