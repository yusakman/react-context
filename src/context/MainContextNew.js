import React, { createContext, useState } from "react";

export const MainContextNew = createContext();

const MainContextProviderNew = (props) => {
  const [data, setData] = useState({
    name: "Lucy Chen",
    ava: "https://reqres.in/img/faces/7-image.jpg",
  });

  return (
    <MainContextNew.Provider value={{ ...data }}>
      {props.children}
    </MainContextNew.Provider>
  );
};

export default MainContextProviderNew;
