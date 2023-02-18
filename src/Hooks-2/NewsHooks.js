import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsFormHooks from './NewsFormHooks';

const fetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => res.data.articles);
};

export default function NewsHooks() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ searchQuery: query, currentPage })
      .then((response) => {
        setTimeout(() => {
          setArticles((prevArticles) => [...prevArticles, ...response]);
          setCurrentPage((prevPage) => prevPage + 1);
        }, 1000);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false)); //has to be passed as a anonymous callback
  }, [query, currentPage]);

  const onChangeQuery = (query) => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  return (
    <div style={{ margin: 20 }}>
      {error && <h1>This is an error: {error}</h1>}

      <NewsFormHooks onSubmit={onChangeQuery} />

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {isLoading && (
        <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
          Loading...
        </p>
      )}
    </div>
  );
}
