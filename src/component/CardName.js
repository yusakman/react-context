import React, { useContext } from "react";
// import { MainContext } from "../context/MainContext";
import { MainContextNew } from "../context/MainContextNew";
import { LayoutContext } from "../context/LayoutContextNew";

const CardName = () => {
  // const {name} = useContext(MainContext);
  const {name} = useContext(MainContextNew);
  const {nightmode, day, night} = useContext(LayoutContext);

    const mode = nightmode ? day : night;

  return (
    <div>
      <h1 style={{color: mode.color}}>{name}</h1>
    </div>
  );
};

export default CardName;
