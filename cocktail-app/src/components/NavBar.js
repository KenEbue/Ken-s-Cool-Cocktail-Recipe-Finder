import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cocktails">Cocktails</Link>
        </li>
        <li>
          <Link to="/cocktails/new">Add Cocktail</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
