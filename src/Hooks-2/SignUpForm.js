import React, { Component } from 'react';

const styles = {
  form: {
    width: 320,
    marginLeft: 15,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <span>Mail</span>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <label style={styles.label}>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
