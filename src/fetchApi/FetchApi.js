import React, { useEffect, useState } from "react";
import style from "./FetchApi.module.css";
const FetchApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://child.onrender.com/api/sciencefiction").then((response) => {
      response.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  console.log(data);

  return (
    <div>
      <ul className={style.main}>
        {data.map((item, index) => (
          <div key={index} className={style.card}>
            <img
              src={`https://ik.imagekit.io/dev24/${item.Image}`}
              alt={item.title}
              style={{ maxWidth: "200px" }}
            />
            <h5>{item.Title}</h5>
            <button>{item.Status}</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
