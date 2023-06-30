import React, { useState } from 'react';
import CocktailSearch from './CocktailSearch';
import CocktailList from './CocktailList';
import CocktailDetails from './CocktailDetails';
import CocktailForm from './CocktailForm'; // Import the CocktailForm component

const CocktailFinder = () => {
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);

  const handleCocktailSelect = (cocktailId) => {
    setSelectedCocktailId(cocktailId);
  };

  const handleCocktailCreate = (newCocktail) => {
    // Handle creating a new cocktail
    // You can implement the logic here to make a POST request to your backend API
    console.log('Creating a new cocktail:', newCocktail);
  };

  return (
    <div>
      <h1>Cocktail Finder</h1>
      <CocktailSearch onCocktailSelect={handleCocktailSelect} />
      <div className="cocktail-container">
        <CocktailList />
        {selectedCocktailId ? (
          <CocktailDetails cocktailId={selectedCocktailId} />
        ) : (
          <CocktailForm onCocktailCreate={handleCocktailCreate} /> // Render the CocktailForm component
        )}
      </div>
    </div>
  );
};

export default CocktailFinder;
