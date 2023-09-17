import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this); third method
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //     console.log(this);
  //   }

  // fourth method:

  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> first method */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> second method */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
