import React, { useState, useEffect } from "react";
import "./card.styles.css";

export const Card = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <div>{props.monster.name}</div>
      <p>{props.monster.email}</p>
    </div>
  );
};
