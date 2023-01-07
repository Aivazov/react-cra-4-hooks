import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.pokemonName);
    if (this.state.pokemonName.trim() === '') {
      return toast.error('Please enter a pokemon name');
    }
    console.log(this.state.pokemonName);
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">
            <ImSearch />
          </button>
        </form>
      </div>
    );
  }
}
