import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LangageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div>
          <LanguageStore>
            <LangageSelector />

            <ColorContext.Provider value="primary">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
      </div>
    );
  }
}

export default App;
