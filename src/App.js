import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import comment from "./comment.js";
import { render } from "react-dom";
import canvas from "./canvas.js";

function warunkowa(increment) {
  if (increment === "Świacie") {
    return "Świat";
  } else {
    return " Piekło";
  }
}

function moje_hello(props) {
  let wartosc = props.increment ? (
    <span> z krokiem {props.increment}</span>
  ) : (
    ""
  );
  return (
    <p>
      Hello {props.where}
      {warunkowa(props.where)}
    </p>
  );
}

//const HelloWorld = moje_hello;

//const HelloWorld = ({ where, increment }) => {
//  return (
//    <p>
//     Hello {where} z krokiem {increment}
//    </p>
//  );
//};

HelloWorld.propTypes = {
  where: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired
};


function HelloWorld extends React.Compoment {
  render() {
    return()
      <div>
       Hello {this.props.where} z krokiem {this.props.increment}
       <div style={{color: "red"}}>{this.props.where} </div>
      </div>  
    );
  }
}

function App extends React.Component() {
  constructor(props){
    super(props);
    this.state = {
      where:"świat"
    };
  }

    onObrazekClicked(){
      console.log("jest w obrazekClicked");
      console.log(this);
      this.setState({
        where: "Amborski"
      });
    }
  render(){
    let tab = [ <div key="1">Ala</div>, <div key="2">Zuza</div>, <div key="3">Janek</div>]
    return(
      <div>
       <HelloWorld where="Świecie" />
       <Comment
        text="Jakas wiadomość"
        date={new Date()}
        author={{
          name: "janek",
          avatarUrl:
            "https://isod.ee.pw.edu.pl/isod-portal/photo/key/gwNm1FNqKgf9eLFsTNcRUg.dat;"
         }}
      />
      </div>
    ); 
  }
}

export default App;
