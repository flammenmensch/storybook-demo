import React from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

const SearchForm = (props: Props) => {
  const { onSubmit } = props;

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim() !== '') {
      onSubmit(value);
    }
  };

  return (
    <form data-testid="search-form" onSubmit={handleSubmit}>
      <div className="mb-1">
        <label className="form-label">
          Search:
          <input
            data-testid="search-input"
            value={value}
            onChange={handleChange}
            placeholder="e.g. bulbasaur"
            className="form-control"
            type="search"
            name="search"
          />
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
