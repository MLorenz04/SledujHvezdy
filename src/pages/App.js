/* React Import */
import React, { useState } from "react";
/* CSS Imports */
import "../css/index.css";
import "../css/layout.css";
import "../css/typo.css";
/* Templates from template folder */
import { Header } from "../templates/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Hvezdy from "./Stars";
import Souhvezdi from "./Constellation";
import NewStar from "./NewStar";
import Planets from "./Planets";
import NewPlanet from "./NewPlanet";
import { GalaxyBackground } from "../3d/Experience";
/* Main function creating MainPage */
function App() {
  const [loading, setLoading] = useState(false);
  /* Routes are handling what content is displayed based on provided route */
  return (
    <div className="App">
      <div className="background">
        <GalaxyBackground />
      </div>
      <div className="page">
        <Header />
        <div className="page_content">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/planety" element={<Planets />}></Route>
            <Route path="/hvezdy" element={<Hvezdy />}></Route>
            <Route path="/souhvezdi" element={<Souhvezdi />}></Route>
            <Route path="/pridatHvezdu" element={<NewStar />}></Route>
            <Route path="/pridatPlanetu" element={<NewPlanet />}></Route>
          </Routes>
          <div className={loading ? "overlay loaded" : "overlay"}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
