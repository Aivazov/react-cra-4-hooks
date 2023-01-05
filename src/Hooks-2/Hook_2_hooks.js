import React, { Component } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

export default class Hook_2 extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <>
        <p style={styles.clockface}>
          Current time: {this.state.time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.stop}>
          Stop
        </button>
      </>
    );
  }
}
