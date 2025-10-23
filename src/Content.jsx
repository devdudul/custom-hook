import React from "react";
import { useState, useEffect } from "react";
import useMyFetch from "./useMyFetch";
const Content = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <h1>Content</h1>
      <h2>First update is done in mani baranch succesfully</h2>
      <h3>Second update is done in main branch </h3>
      {/* {console.log(
        data.data.map((ele) => {
          console.log("elements", ele);
        })
      )} */}
    </div>
  );
};

export default Content;
//
const demoApi = "https://jsonplaceholder.typicode.com/albums";
////////

// function useMyFetch(url) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("Error message", error);
//         console.error("Error is", error);
//         setLoading(false);
//       });
//     return { data, loading };
//   }, [url]);

//   if (loading) return <h1>"Loading...."</h1>;

//   return (
//     <>
//       <h1>
//         fetched data{" "}
//         {data.map((e) => {
//           //   console.log(e.title);
//           return <h2>{e.title}</h2>;
//         })}{" "}
//       </h1>
//     </>
//   );
// }
