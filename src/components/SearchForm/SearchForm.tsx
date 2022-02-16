import React from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

const SearchForm = (props: Props) => {
  const { onSubmit } = props;

  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      if (value.trim() !== '') {
        onSubmit(value);
      }
    },
    [value, onSubmit],
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label className="form-label">
          Search:
          <input
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
