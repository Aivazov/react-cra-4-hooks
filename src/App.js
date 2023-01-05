import React, { useState } from 'react';
import HooksFirstMain from './Hooks-1/Main';
import HooksFirstAlert from './Hooks-1/Alert';
import Timer from './Hooks-2/Timer';
import TimerHooks from './Hooks-2/TimerHooks';
import Counter from './Hooks-2/Counter';
import CounterHooks from './Hooks-2/CounterHooks';
import SignUpForm from './Hooks-2/SignUpForm';
import SignUpFormHooks from './Hooks-2/SignUpFormHooks';

import './App.css';

export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);
  return (
    // <AlertContext.Provider value={alert}>
    //   <div className="App">
    //     <HooksFirstAlert />
    //     <HooksFirstMain toggle={toggleAlert} />
    //   </div>
    // </AlertContext.Provider>
    // <Timer />
    // <Counter />
    // <CounterHooks />
    // <SignUpForm />
    <SignUpFormHooks />
  );
}

export default App;
