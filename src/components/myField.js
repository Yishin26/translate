import React from "react";
import LanguageContext from "../context/LanguageContext";

class MyField extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "English" ? "Name" : "名字";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default MyField;