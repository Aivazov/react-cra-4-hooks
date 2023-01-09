import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
// import PokemonForm from './PokemonForm';
import PokemonFormHooks from './PokemonFormHooks';
import PokemonInfoHooks from './PokemonInfoHooks';
import PokemonInfo from './PokemonInfo';

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');

  const handlePokemonSubmit = (pokemonName) => {
    setPokemonName(pokemonName);
  };
  return (
    <div style={{ margin: 15 }}>
      <ToastContainer autoClose={3000} /> {/* this is a notiflix alternative */}
      <PokemonFormHooks onSubmit={handlePokemonSubmit} />
      <PokemonInfoHooks pokemonName={pokemonName} />
    </div>
  );
}
