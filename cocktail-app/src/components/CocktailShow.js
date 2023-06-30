import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CocktailShow = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    // Fetch cocktail details based on the ID and update state
    // Example code using the fetch API
    fetch(`API_URL/${id}`)
      .then(response => response.json())
      .then(data => setCocktail(data))
      .catch(error => console.log(error));
  }, [id]);

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

export default CocktailShow;
