import React, { useState } from 'react';
import CocktailSearch from './CocktailSearch';
import CocktailList from './CocktailList';
import CocktailDetails from './CocktailDetails';

const CocktailFinder = () => {
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);

  const handleCocktailSelect = (cocktailId) => {
    setSelectedCocktailId(cocktailId);
  };

  return (
    <div>
      <h1>Cocktail Finder</h1>
      <CocktailSearch onCocktailSelect={handleCocktailSelect} />
      <div className="cocktail-container">
        <CocktailList />
        {selectedCocktailId && <CocktailDetails cocktailId={selectedCocktailId} />}
      </div>
    </div>
  );
};

export default CocktailFinder;
