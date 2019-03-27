import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends React.Component {
  state = { language: "english" };
  onLanguageChage = language => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          select a language: &nbsp;
          <i
            className="flag us"
            onClick={() => this.onLanguageChage("English")}
          />
          <i
            className="flag tw"
            onClick={() => this.onLanguageChage("繁體中文")}
          />
          <hr />    
        <ColorContext.Provider value='primary'>
          <LanguageContext.Provider value={this.state.language}>
          
            <UserCreate />
          </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
