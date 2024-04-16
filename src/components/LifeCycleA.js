import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Adam",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getsnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA ComponentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution",
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
