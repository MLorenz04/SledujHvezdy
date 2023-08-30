/* React Import */
import React, { useState, useEffect } from "react";
/* CSS Imports */
import "../css/index.css";
import "../css/layout.css";
import "../css/typo.css";
/* Templates from template folder */
import { Header } from "../templates/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import Hvezdy from "./Stars";
import Souhvezdi from "./Constellation";
import NewStar from "./NewStar";
import Planets from "./Planets";
import NewPlanet from "./NewPlanet";
import { GalaxyBackground } from "../3d/Experience";
import Error404 from "./404";
/**
 * Hlavní spouštěč celé stránky
 * @returns Export komponentu
 * @author Matyáš Lorenz
 */
function App() {
  const [isMainPage, setMainPage] = useState(null);
  var routeComponents = [];
  /* Informace o cestách */
  const routeConfig = [
    { path: "/404", element: <Error404 /> },
    { path: "/", element: <Homepage /> },
    { path: "/planety", element: <Planets /> },
    { path: "/hvezdy", element: <Hvezdy /> },
    { path: "/souhvezdi", element: <Souhvezdi /> },
    { path: "/pridatHvezdu", element: <NewStar /> },
    { path: "/pridatPlanetu", element: <NewPlanet /> },
  ];
  /* Přepis infa na cesty
   * Z neznámých důvodů v případě, že se použilo pole Route, tak nefungoval useEffect. Možná někdy zkusit překopat?
   */
  routeConfig.forEach((route, index) => {
    routeComponents.push(
      <Route key={index} path={route.path} element={route.element} />
    );
  });
  /* Pokud se změní URL, nastane pokus o změnu proměnné na render pozadí */
  useEffect(() => {
    setMainPage(false);
    routeConfig.forEach((route, index) => {
      if (route.path == window.location.pathname) {
        setMainPage(true);
      }
    });
  }, [window.location.pathname]);
  return (
    <div className="App">
      <div className="background">{isMainPage ? <GalaxyBackground /> : ""}</div>
      <div className="page">
        <Header />
        <div className="page_content">
          <Routes>{routeComponents}</Routes>;
        </div>
      </div>
    </div>
  );
}
export default App;
