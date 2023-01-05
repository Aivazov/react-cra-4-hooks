import React, { Component } from 'react';
import axios from 'axios';
import NewsForm from './NewsForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 4330ebfabc654a6992c2aa792f3173a3';

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

  componentDidUpdate(_, prevState) {
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

  fetchingArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchArticles(options).then((articles) => {
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...articles],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>This is a mistake {error.message}</h1>}

        <NewsForm onSubmit={this.onChangeQuery} />

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
          <button type="button" onClick={this.fetchingArticles}>
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
