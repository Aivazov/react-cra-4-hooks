import React, { useState } from 'react';
import HooksFirstMain from './Hooks-1/Main';
import HooksFirstAlert from './Hooks-1/Alert';

import './App.css';

const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false)
  return (
    <AlertContext.Provider value={alert}>
      <div className="App">
        <HooksFirstAlert />
        <HooksFirstMain />
      </div>
    </AlertContext.Provider>
  );
}

export default App;
