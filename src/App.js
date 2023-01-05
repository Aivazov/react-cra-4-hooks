import React, { useState } from 'react';
import HooksFirstMain from './Hooks-1/Main';
import HooksFirstAlert from './Hooks-1/Alert';
import Hook_2 from './Hooks-2/Hook_2';

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
    <Hook_2 />
  );
}

export default App;
