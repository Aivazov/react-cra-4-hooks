import React, { Component } from 'react';
import axios from 'axios';
// import NewsForm from './NewsForm';
import NewsFormHooks from './NewsFormHooks';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => res.data.articles);
};

export default class News extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchArticles(options)
      .then((articles) => {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>This is a mistake</h1>}

        <NewsFormHooks onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>

        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            Load More
          </button>
        )}

        {isLoading && (
          <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
            Loading...
          </p>
        )}
      </div>
    );
  }
}
