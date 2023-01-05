import React, { useState } from 'react';

export default function NewsFormHooks({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => e.currentTarget.value;
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}