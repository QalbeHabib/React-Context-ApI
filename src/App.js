import React, { Component, useState } from "react";
import Parents from "./Components/Parents";
import MyContext from "./Context/MyContext";

const App = () => {
  const counter = useState(12);
  return (
    <MyContext.Provider value={counter}>
      <Parents />
     {/* <h1>Hey I am Parents : {counter} </h1> */}
 
    </MyContext.Provider>
  );
};

export default App;
