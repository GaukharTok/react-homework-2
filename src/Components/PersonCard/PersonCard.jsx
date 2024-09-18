import React from "react";
import "./PersonCard.css";

export default function PersonCard({ imgUrl, gender, name, email }) {
  return (
    <div className="main">
      <div className="human-card">
        <img src={imgUrl} alt="Person" width={"150px"} />
        <h2>Name: {name.first} </h2>
        <h2>Lastname: {name.last} </h2>
        <h3>Gender: {gender}</h3>
        <h3>Email {email}</h3>
      </div>
    </div>
  );
}
