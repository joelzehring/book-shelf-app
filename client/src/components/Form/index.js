import React, { Component } from "react";
import BookList from "../BookList";
const axios = require("axios");

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      searchTerm: "",
      searchResults: []
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: this.state.searchTerm
      }
    })
    .then(res => {
      console.log(res.data.items);
      const newResults = res.data.items;
      this.setState({
        searchResults: newResults
      });
      document.getElementById("searchTerm").value = "";
    });
  };

  render() {
    return(
      <div>
        <div className="search-container">
          <form onSubmit={this.handleFormSubmit}>
            <input id="searchTerm" name="searchTerm" type="text" onChange={this.handleInputChange} placeholder="Enter a title or author to search" />
            <input type="submit" value="Search" />
          </form>
        </div>
        <BookList books={ this.state.searchResults } />
      </div>
  )};
}

export default Form;