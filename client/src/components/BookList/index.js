import React, { Component } from "react";
import API from "../../utils/API";

function BookList(props) {
  return (
    <div className="book-list">
    {
      props.books.map((item, key) => {
        return (
          <div className="book-card" key={key}>
            <img src={item.volumeInfo.imageLinks.smallThumbnail} />
            <h4>{item.volumeInfo.title}</h4>
            <p>{item.volumeInfo.authors.join(", ")}</p>
            <p>{ item.volumeInfo.description }</p>
            <a href={ item.volumeInfo.infoLink } target="_blank">More info</a>
          </div>
        )
      })
    }
    </div>
  )
}

export default BookList;