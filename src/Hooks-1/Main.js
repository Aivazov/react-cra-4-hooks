import React from 'react';

export default function Main({ toggle }) {
  return (
    <>
      <h1>Hey in the context example</h1>
      <button className="btn btn-dark" onClick={toggle}>Show alert</button>
    </>
  );
}
