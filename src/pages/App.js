/* React Import */
import React, { useState, useEffect } from "react";
/* CSS Imports */
import "../css/index.css";
import "../css/layout.css";
import "../css/typo.css";
/* Templates from template folder */
import { Header } from "../templates/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Hvezdy from "./Hvezdy";
import Souhvezdi from "./Souhvezdi";
import NewStar from "./NewStar";

/* Main function creating MainPage */
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(false);
    },
    setTimeout(() => {
      setLoading(true);
    }, 4000)
  );
  /* Routes are handling what content is displayed based on provided route */
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/hvezdy" element={<Hvezdy />}></Route>
        <Route path="/souhvezdi" element={<Souhvezdi />}></Route>
        <Route path="/add" element={<NewStar />}></Route>
      </Routes>
      <div className={loading ? "overlay loaded" : "overlay"}></div>
    </div>
  );
}

export default App;
