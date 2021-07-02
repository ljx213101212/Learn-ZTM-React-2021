import React, { useState, useEffect } from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeHolder, handleSearch }) => {
  //   useEffect(() => {
  //     console.log(props);
  //   }, []);

  return (
    <input
      type="search"
      className="search"
      placeholder={placeHolder}
      onChange={handleSearch}
    ></input>
  );
};
