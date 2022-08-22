import React, { useState, createContext } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
  const [data, setData] = useState({
    nightmode: false,
    day: {
      color: "#000",
      backgroundColor: "red",
    },
    night: {
      color: "#fff",
      backgroundColor: "#000",
    },
  });

  const handleToggle = () => {
    setData((data) => ({
      ...data,
      nightmode: !data.nightmode,
    }));
    console.log("handleToggleCalled");
    console.log(data.nightmode);
  };

  return (
    <LayoutContext.Provider value={{ ...data, handleToggle }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider