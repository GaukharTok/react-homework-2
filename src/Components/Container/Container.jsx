import React from "react";

import { getPerson } from "../../api.js/api.js";
import PersonCard from "../PersonCard/PersonCard.jsx";
import "./Container.css";

export const Container = ({ state, setter }) => {
  let url = "https://randomuser.me/api/?results=5";

  const onClickHandler = () => {
    getPerson(url, setter, state);
    console.log(state);
  };

  return (
    <>
      <div className="users">
        <header>All Users</header>
        <button className="show" onClick={onClickHandler}>
          Show all users
        </button>
      </div>
      <div className="userCards">
        {state.map((human, index) => (
          <PersonCard
            key={index}
            imgUrl={human.picture.medium}
            name={human.name}
            last={human.last}
            gender={human.gender}
            email={human.email}
          />
        ))}
      </div>
    </>
  );
};
