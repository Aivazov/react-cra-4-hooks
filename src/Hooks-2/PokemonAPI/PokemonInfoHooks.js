import { useState, useEffect } from 'react';
import { ImSpinner } from 'react-icons/im';
import '../../help styles/SpinnerStyles.css';

export default function PokemonInfoHooks({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  // const [loading, setLoading] = useState(false); no need to use because of state machine patter
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus('pending');
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`We do not have a Pokemon with name "${pokemonName}"`)
          );
        })
        .then((pokemon) => {
          console.log('pokemon', pokemon);
          setPokemon(pokemon);
          setStatus('resolved');
        })
        .catch((error) => {
          setError(error);
          setStatus('rejected');
        });
      // .finally(this.setState({ loading: false, error: null }));
    }, 300);
  }, [pokemonName]);

  if (status === 'idle') {
    console.log(status);
    return <p>Please enter the name of the Pokemon</p>;
  }

  if (status === 'pending') {
    console.log(status);
    return (
      <div>
        <ImSpinner size="32" className="icon-spin" />
        <p>Loading your Pokemon. Please wait...</p>
      </div>
    );
  }

  if (status === 'rejected') {
    console.log(status);
    return <p>{error.message}</p>;
  }

  if (status === 'resolved') {
    console.log(status);
    return (
      <div>
        <p>Name: {pokemon.name}</p>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          width="240"
        />
        <p>Base experience: {pokemon.base_experience}</p>
      </div>
    );
  }

  // return <div>PokemonInfoHooks</div>;
}
