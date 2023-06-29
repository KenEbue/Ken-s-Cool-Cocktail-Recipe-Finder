import React from 'react';
import CocktailItem from './CocktailItem';

const CocktailList = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      {cocktails.map(cocktail => (
        <CocktailItem key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
