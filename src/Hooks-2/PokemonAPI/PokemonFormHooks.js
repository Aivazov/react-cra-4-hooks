import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PokemonFormHooks({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = (event) => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      return toast.error('Please enter a pokemon name');
    }
    console.log(pokemonName);
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="pokemonName"
            value={pokemonName}
            onChange={handleNameChange}
          />
          <button type="submit">
            <ImSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
