import React from "react";
import { useState, useEffect } from "react";

function useMyFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error message", error);
        console.error("Error is", error);
        setLoading(false);
      });
  }, [url]);
  return { data, loading };
}
export default useMyFetch;
