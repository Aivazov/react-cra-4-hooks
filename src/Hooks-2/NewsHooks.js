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

  useEffect(() => {
    fetchArticles({ searchQuery: query, currentPage }).then((response) =>
      setArticles((prevArticles) => [...prevArticles, ...response])
    );
  }, [query, currentPage]);

  const onChangeQuery = (query) => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
  };
  return (
    <div style={{ margin: 20 }}>
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
    </div>
  );
}
