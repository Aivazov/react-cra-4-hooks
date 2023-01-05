import React, { Component } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

export default class Timer extends Component {
  state = {
    time: new Date(),
    toggleBtn: true,
  };

  intervalId = null;

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
    this.setState({ toggleBtn: true });
  };

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
    this.setState({ toggleBtn: false });
  };

  render() {
    return (
      <>
        <p style={styles.clockface}>
          Current time: {this.state.time.toLocaleTimeString()}
        </p>
        {!this.state.toggleBtn ? (
          <button
            type="button"
            onClick={this.stop}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Stop
          </button>
        ) : (
          <button
            type="button"
            onClick={this.start}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Start
          </button>
        )}
      </>
    );
  }
}
