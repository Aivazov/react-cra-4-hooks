import React, { useState } from 'react';
import HooksFirstMain from './Hooks-1/Main';
import HooksFirstAlert from './Hooks-1/Alert';
import Timer from './Hooks-2/Timer';
import TimerHooks from './Hooks-2/TimerHooks';
import Counter from './Hooks-2/Counter';
import CounterHooks from './Hooks-2/CounterHooks';
import SignUpForm from './Hooks-2/SignUpForm';
import SignUpFormHooks from './Hooks-2/SignUpFormHooks';
import ColorPicker from './Hooks-2/ColorPicker';
import ColorPickerHooks from './Hooks-2/ColorPickerHooks';
import News from './Hooks-2/News';
import NewsHooks from './Hooks-2/NewsHooks';
import Pokemon from './Hooks-2/PokemonAPI/Pokemon';

import './App.css';

export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);
  const [pokemonName, setPokemonName] = useState('');

  const toggleAlert = () => setAlert((prev) => !prev);

  const handlePokemonSubmit = (pokemonName) => {
    setPokemonName(pokemonName);
  };

  return (
    //{' '}
    // <AlertContext.Provider value={alert}>
    // <div className="App">
    //   <HooksFirstAlert />
    //    <HooksFirstMain toggle={toggleAlert} />

    // </div>
    // </AlertContext.Provider>
    // <Timer />
    // <TimerHooks />
    // <Counter />
    // <CounterHooks />
    // <SignUpForm />
    // <SignUpFormHooks />
    // <ColorPicker />
    // <ColorPickerHooks />
    // <News />
    // <NewsHooks />

    // ***POKEMON API HOOKS***
    <div style={{ margin: 15 }}>
      <Pokemon />
    </div>
  );
}

export default App;
