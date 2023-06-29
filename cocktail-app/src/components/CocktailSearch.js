import React, { useState } from 'react';

const CocktailSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  const searchCocktail = async (cocktailName) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
      const data = await response.json();

      setSearchResults(data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktail data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { cocktailName } = event.target.elements;
    searchCocktail(cocktailName.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cocktailName" />
        <button type="submit">Search</button>
      </form>

      {/* Render the search results */}
      {searchResults.map((drink) => (
        <div key={drink.idDrink}>{drink.strDrink}</div>
      ))}
    </div>
  );
};

export default CocktailSearch;
