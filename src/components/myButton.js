import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class MyButton extends React.Component {
  //static contextType = LanguageContext;
  renderSubmit(value) {
    return value === "English" ? "Submit" : "送出";
  }
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
        {/*text*/}
      </button>
    );
  }
  render() {
    //const text = this.context === "English"?'Submit':'送出';
    return (
      <div>
        <ColorContext.Consumer>
          {color => this.renderButton(color)}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default MyButton;
