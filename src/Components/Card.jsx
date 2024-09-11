import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";

const Card = ({ char }) => {
  const { state, dispatch } = useCharStates();
  const isFav = state.favs.find((fav) => fav.id == char.id);
  console.log(isFav);
  const addFav = () => {
    // setFavs((favs) => [...favs, char]);
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: char });
    // if (isFav) {
    //   dispatch({ type: "REMOVE_FAV", payload: char });
    // } else {
    //   dispatch({ type: "ADD_FAV", payload: char });
    // }
  };

  return (
    <div>
      <Link to={"/detail/" + char.id}>
        <img src={char.image} alt="" />
        <h2>{char.name}</h2>
      </Link>
      <button onClick={addFav}>{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
