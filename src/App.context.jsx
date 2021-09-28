import React, { Component, createContext } from "react";

const AppContext = createContext(null);

class CtxApp extends Component {
  state = {
    navbtnact: false,
  };

  setNavBtn = () => {
    const state = { ...this.state };
    state.navbtnact = !state.navbtnact;
    this.setState(state);
  };
  render() {
    return (
      <AppContext.Provider
        value={{ navbtnact: this.state.navbtnact, setNavBtn: this.setNavBtn }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, CtxApp };
