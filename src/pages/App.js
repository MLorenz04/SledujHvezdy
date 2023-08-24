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
import Single from "./SingleStar";
import Error404 from "./404";
/**
 * Hlavní spouštěč celé stránky
 * @returns Export komponentu
 * @author Matyáš Lorenz
 */
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <div className="background">
        <GalaxyBackground />
      </div>
      <div className="page">
        <Header />
        <div className="page_content">
          <Routes>
            <Route path="/404" element={<Error404/>}></Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/planety" element={<Planets />}></Route>
            <Route path="/hvezdy" element={<Hvezdy />}></Route>
            <Route path="/souhvezdi" element={<Souhvezdi />}></Route>
            <Route path="/pridatHvezdu" element={<NewStar />}></Route>
            <Route path="/pridatPlanetu" element={<NewPlanet />}></Route>
            <Route path="/hvezda/:short" element={<Single type="hvezda" />}></Route>
            <Route path="/planeta/:short" element={<Single type="planeta"/>}></Route>
          </Routes>
          <div className={loading ? "overlay loaded" : "overlay"}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
