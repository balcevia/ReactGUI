import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

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

const HelloWorld = moje_hello;

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
function App() {
  return <HelloWorld where="Świecie" />;
}
export default App;
