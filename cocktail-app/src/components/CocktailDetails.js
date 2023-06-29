import React, { useEffect, useState } from 'react';

const CocktailDetails = ({ cocktailId }) => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    // Fetch cocktail details based on cocktailId and update state
    // Example code using the fetch API
    fetch(`API_URL/${cocktailId}`)
      .then(response => response.json())
      .then(data => setCocktail(data))
      .catch(error => console.log(error));
  }, [cocktailId]);

  if (!cocktail) {
    return <div>Loading cocktail details...</div>;
  }

  const { name, image, recipe, instructions } = cocktail;

  return (
    <div className="cocktail-details">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{recipe}</p>
      <p>{instructions}</p>
    </div>
  );
};

export default CocktailDetails;
