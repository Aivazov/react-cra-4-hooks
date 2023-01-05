import React, { useState } from 'react';

export default function CounterHooks() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prev) => prev + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((prev) => prev + 1);
  };
  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Clicked CounterA {counterA} times
      </button>

      <button type="button" onClick={handleCounterBIncrement}>
        Clicked CounterB {counterB} times
      </button>
    </>
  );
}
