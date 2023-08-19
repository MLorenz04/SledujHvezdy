import { Card } from "../templates/Card";
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
        {planet && planet.map((cardData) => <Card cardData={cardData} />)}
      </div>
    </div>
  );
}
