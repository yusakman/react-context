import React, { Component, createContext } from "react";

export const MainContext = createContext({
  key: true,
});

class MainContextProvider extends Component {

  state = {
    name: 'Lucy Chen',
    ava: 'https://reqres.in/img/faces/7-image.jpg'
  };

  render() {
    return (
      <MainContext.Provider value={{...this.state}}>{this.props.children}</MainContext.Provider>
    );
  }
}

export default MainContextProvider