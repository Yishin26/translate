import React from "react";
import MyButton from "./myButton";
import MyField from "./myField";

class UserCreate extends React.Component {
  render() {
    return (
      <div className="ui form">
        <MyField />
        <MyButton />
      </div>
    ); ;
  }
}

export default UserCreate;
