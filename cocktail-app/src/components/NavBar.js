import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/new">New Movie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
