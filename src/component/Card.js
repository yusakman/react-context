import React, {useContext} from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import Toggle from "./Toggle";
import { LayoutContext } from "../context/LayoutContextNew";

const Card = () => {
const {nightmode, day, night} = useContext(LayoutContext)

const mode = nightmode ? day : night
  return (
    <div style={{backgroundColor: mode.backgroundColor}}>
      <CardName />
      <CardImage />
      <Toggle />
    </div>
  );
};

export default Card;
