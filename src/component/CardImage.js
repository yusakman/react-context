import React, { useContext } from "react";
// import { MainContext } from "../context/MainContext";
import { MainContextNew } from "../context/MainContextNew"

const CardImage = () => {
  // const {ava} = useContext(MainContext);
  const {ava} = useContext(MainContextNew)

  return (
    <div>
      <img src={ava}></img>
    </div>
  );
};

export default CardImage;
