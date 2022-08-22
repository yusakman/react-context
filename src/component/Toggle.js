import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContextNew";

const Toggle = () => {
  const { nightmode, handleToggle } = useContext(LayoutContext);

  return (
    <div>
      <button onClick={handleToggle}>Change to {nightmode ? "Day" : "Night"} </button>
    </div>
  );
};

export default Toggle;
