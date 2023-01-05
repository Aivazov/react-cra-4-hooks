import React, { useState } from 'react';

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

export default function SignUpFormHooks() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('email', email, 'password', password);
  };

  return (
    <form style={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label style={styles.label}>
        <span>Mail</span>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>

      <label style={styles.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}
