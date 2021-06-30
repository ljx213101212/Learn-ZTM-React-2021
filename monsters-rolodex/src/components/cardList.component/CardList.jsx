import React, { useState, useEffect } from "react";
import { Card } from "../card.component/Card";
import "./card-list.styles.css";

export const CardList = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}
    </div>
  );
};
