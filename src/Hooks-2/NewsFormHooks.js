import React, { useState } from 'react';

export default function NewsFormHooks({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 15 }}>
      <input type="text" value={query} onChange={handleChange} />
      <button
        type="submit"
        style={{ marginLeft: 10, border: '1px solid #555' }}
      >
        Search
      </button>
    </form>
  );
}
