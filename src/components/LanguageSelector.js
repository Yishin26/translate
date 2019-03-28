import React from 'react';
import LanguageContext from '../context/LanguageContext';


class LanguageSelector extends React.Component{
    static contextType=LanguageContext;
    render(){
        console.log(this.context);
        return (
          <div>
            select a language: &nbsp;
            <i
              className="flag us"
              onClick={() => this.context.onLanguageChange("English")}
            />
            <i
              className="flag tw"
              onClick={() => this.context.onLanguageChange("繁體中文")}
            />
          </div>
        );
        
    }
}

export default LanguageSelector;