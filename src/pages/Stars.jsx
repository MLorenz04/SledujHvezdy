import { CardStar } from "../templates/CardStar";
import { React, useEffect, useState, Fragment } from "react";
import { path_srv } from "../config";
import "../css/page_star.css";
/**
 * Komponent stránky vykreslující planety z databáze
 * @returns Export komponentu
 * @author Matyáš Lorenz
 */
export default function Hvezdy() {
  const [stars, setStars] = useState(null);
  useEffect(() => {
    fetch(path_srv + "/api/v1/stars")
      .then((res) => res.json())
      .then((data) => {
        setStars(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="main">
      <h1> Hvězdy</h1>
      <div className="container stars">
        {stars && stars.map((cardData) => <CardStar cardData={cardData} />)}
      </div>
    </div>
  );
}
