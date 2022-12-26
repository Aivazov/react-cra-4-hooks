import React, { useState } from 'react';
import HooksFirstMain from './Hooks-1/Main';
import HooksFirstAlert from './Hooks-1/Alert';

import './App.css';

export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);
  return (
    <AlertContext.Provider value={alert}>
      <div className="App">
        <HooksFirstAlert />
        <HooksFirstMain toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  );
}

export default App;
