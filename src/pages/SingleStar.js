import React, { useEffect, useState } from "react";
import { path_srv } from "../config";
import { useParams, useNavigate } from "react-router-dom";

export default function Single() {
  
const navigate = useNavigate();
  const { short } = useParams();
  const [data, setData] = useState(null); // Changed initial state to null
  useEffect(() => {
    try {
      fetch(path_srv + "/api/v1/hvezda/" + short)
        .then((res) => res.json()) // Store the returned JSON data
        .then((data) => {
          console.log(data);
          setData(data[0]);
        })
        .catch((error) => {
          navigate("/404", { replace: true });
        });
    } catch (error) {
      navigate("/404", { replace: true });
    }
  }, [short]);
  return (
    <div>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
