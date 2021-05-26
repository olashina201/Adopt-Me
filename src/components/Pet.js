import React from "react";
import "../styles.css";

const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{ name }</h1>
      <h2>{ animal }</h2>
      <h2>{ breed }</h2>
    </div>
  );
};

export default Pet
