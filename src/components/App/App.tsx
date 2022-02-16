import React from 'react';
import { usePokemon } from '../../application/usePokemon';
import Spinner from '../Spinner/Spinner';
import SearchForm from '../SearchForm/SearchForm';
import PokemonCard from '../PokemonCard/PokemonCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const App = () => {
  const [name, setName] = React.useState('bulbasaur');

  const { data, error, isError, isLoading } = usePokemon(name);

  const handleSearch = React.useCallback((value) => {
    setName(value);
  }, []);

  return (
    <main className="container">
      <header className="row">
        <h1 className="display-1">Pokemon search</h1>
      </header>
      <section className="row">
        <SearchForm onSubmit={handleSearch} />
      </section>
      {isLoading && <Spinner />}
      {isError && error && <ErrorMessage error={error as Error} />}
      {data && <PokemonCard pokemon={data} />}
    </main>
  );
};

export default App;
