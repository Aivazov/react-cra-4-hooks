import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: +(counterB + 1) }));
  };

  componentDidMount() {
    const { counterA, counterB } = this.state;
    const totalClicks = counterA + counterB;

    document.title = `You are clicked ${totalClicks} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    const { counterA, counterB } = this.state;

    if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
      const totalClicks = counterA + counterB;
      document.title = `You are clicked ${totalClicks} times`;
    }
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleCounterAIncrement}>
          Clicked CounterA {this.state.counterA} times
        </button>

        <button type="button" onClick={this.handleCounterBIncrement}>
          Clicked CounterB {this.state.counterB} times
        </button>
      </>
    );
  }
}
