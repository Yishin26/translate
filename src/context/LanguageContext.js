import React from "react";

const Context = React.createContext("繁體中文");

export class LanguageStore extends React.Component {
  state = { language: "繁體中文" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange:this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;