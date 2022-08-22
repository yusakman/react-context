import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const CardImage = () => {
  const context = useContext(MainContext);

  return (
    <div>
      <img src={context.data.ava}></img>
    </div>
  );
};

export default CardImage;
