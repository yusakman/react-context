import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { LayoutContext } from "../context/LayoutContextNew";

const CardName = () => {
  const context = useContext(MainContext);
  const {nightmode, day, night} = useContext(LayoutContext);

    const mode = nightmode ? day : night;

  return (
    <div>
      <h1 style={{color: mode.color}}>{context.data.name}</h1>
    </div>
  );
};

export default CardName;
