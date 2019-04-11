import React from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.cref = React.createRef();
  }

  componentDidMount() {
    this.repaint();
  }

  repaint() {
    let can = this.cref.current;
    let ctx = can.getContext("2d");
    ctx.react(30, 30, 50, 50);
    ctx.stroke();
    console.log(can);
  }

  render() {
    return (
      <canvas
        style={{ border: "1px solid gray" }}
        ref={this.cref}
        width={400}
        height={400}
      />
    );
  }
}

export default canvas;
