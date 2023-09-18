import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Short circuit operator state && expression if it is true after && appears, if not no ++++++++++++++++ follow most of the time
    return this.state.isLoggedIn && <div>Welcome Adam</div>;

    // Ternary Conditional Approach ++++++++++++++++ follow most of the time
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Adam</div>
    // ) : (
    //   <div>Welcome Stranger</div>
    // );

    // Element variable approach +++++++++++++++++++
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Adam</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;
    // if/else rendering method ++++++++++++++++++++++
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Adam</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
