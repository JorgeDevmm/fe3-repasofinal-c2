import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";

const Card = ({ char }) => {
  const { setFavs } = useCharStates();
  const addFav = () => {
    setFavs((favs) => [...favs, char]);
  };

  return (
    <div>
      <Link to={"/detail/" + char.id}>
        <img src={char.image} alt="" />
        <h2>{char.name}</h2>
      </Link>
      <button onClick={addFav}>⭐</button>
    </div>
  );
};

export default Card;
