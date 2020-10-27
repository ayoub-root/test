import  {Text} from 'react-native';
import React, { Component } from 'react'
export default class Loading extends Component {
  state = {
    timer: null,
    counter: 0
  };

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick =() => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
      return(
    <Text>{"...".substr(0, this.state.counter % 3 + 1)}</Text>);
  }
}