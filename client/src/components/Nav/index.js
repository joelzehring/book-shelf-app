import React from "react";

function Nav() {
  return (
    <nav>
      <h1><a href="/">Book Shelf App</a></h1>
      <ul>
        <li><a href="/">Search</a></li>
        <li><a href="/saved">Saved Books</a></li>
      </ul>
    </nav>
  );
}

export default Nav;