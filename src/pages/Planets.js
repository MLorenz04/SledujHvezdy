import { CardPlanet } from "../templates/CardPlanet";
import { React, useEffect, useState, Fragment } from "react";
import { path_srv } from "../config";
import "../css/page_star.css";
export default function Planets() {
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    fetch(path_srv + "/api/v1/planets")
      .then((res) => res.json())
      .then((data) => {
        setPlanet(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="main">
      <h1> Planety </h1>
      <div className="container stars">
        {planet && planet.map((cardData, i) => <CardPlanet key={i} cardData={cardData} />)}
      </div>
    </div>
  );
}
