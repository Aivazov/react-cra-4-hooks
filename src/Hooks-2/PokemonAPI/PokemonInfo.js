import { Component } from 'react';
import { ImSpinner } from 'react-icons/im';
import '../../help styles/SpinnerStyles.css';

// const POKE_API = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`;
// `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false, //no need in the last case
    error: null,
    status: 'idle',
  };

  componentDidMount() {
    // The first method to make an HTTP Request
    // const POKE_API_JSON = this.props.items;
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    //     // fetch(POKE_API_JSON)
    //     .then((res) => res.json())
    //     .then((pokemon) => {
    //       console.log(pokemon);
    //       this.setState({ pokemon });
    //     })
    //     .finally(this.setState({ loading: false }));
    // }, 500);
  }

  componentDidUpdate(prevProp, prevState) {
    // The second method to make an HTTP Request
    if (prevProp.pokemonName !== this.props.pokemonName) {
      console.log('The pokemon name was changed');

      this.setState({ status: 'pending' }); //loading: true, pokemon: null,

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(
                `We do not have a Pokemon with name "${this.props.pokemonName}"`
              )
            );
          })
          .then((pokemon) => {
            console.log(pokemon);
            this.setState({ pokemon, status: 'resolved' });
          })
          .catch((error) => this.setState({ error, status: 'rejected' }));
        // .finally(this.setState({ loading: false, error: null }));
      }, 500);
    }
  }

  render() {
    const { pokemon, loading, error, status } = this.state;
    console.log('pokemon from PokemonInfo: ', pokemon);
    // console.log(POKE_API_JSON);

    // the last thing is use of the state machine
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

    // return (
    //   <div>
    //     {error && <p>{error.message}</p>}
    //     {loading && <p>Loading your Pokemon. Please wait...</p>}
    //     {pokemon && (
    //       <div>
    //         <p>Name: {pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={pokemon.name}
    //           width="240"
    //         />
    //         <p>Base experience: {pokemon.base_experience}</p>
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
