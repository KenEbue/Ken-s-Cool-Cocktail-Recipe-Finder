import React from 'react';
import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

const CocktailList = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      {cocktails.map(cocktail => (
        <div key={cocktail.id}>
          <CocktailItem cocktail={cocktail} />
          <Link to={`/cocktails/${cocktail.id}/show`}>View Details</Link>
          <Link to={`/cocktails/${cocktail.id}/edit`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
