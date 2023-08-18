import { Card } from "../templates/Card";
import { React, useEffect, useState, Fragment } from "react";
import { MainPage } from "../templates/MainPage";
export default function Hvezdy() {
  const [stars, setStars] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/stars")
      .then((res) => res.json()) // Toto vrátí Promise s dekódovanými daty
      .then((data) => {
        setStars(data); // Nastavíte dekódovaná data do stavu
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Fragment>
      <div className="main">
        <MainPage></MainPage>
        <h1> Hvezdicky !</h1>
        <div className="container">
          {stars && stars.map((cardData) => <Card cardData={cardData} />)}
        </div>
      </div>
    </Fragment>
  );
}
