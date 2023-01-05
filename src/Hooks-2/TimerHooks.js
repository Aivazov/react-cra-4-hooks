import React, { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

export default function TimerHooks() {
  const [time, setTime] = useState(new Date());
  const [toggleBtn, setToggleBtn] = useState(true);
  const intervalId = useRef();

  useEffect(() => {
    start();
    setToggleBtn(false);

    return () => {
      stop();
      setToggleBtn(true);
    };
  }, [time, toggleBtn]);

  const start = () => {
    intervalId.current = setInterval(() => {
      console.log(Date.now());
      setTime(new Date());
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <p style={styles.clockface}>Current time: {time.toLocaleTimeString()}</p>
      {!toggleBtn ? (
        <button
          type="button"
          onClick={stop}
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
          onClick={start}
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
