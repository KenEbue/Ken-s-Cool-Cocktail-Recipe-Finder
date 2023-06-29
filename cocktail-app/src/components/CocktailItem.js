import React from 'react';

const CocktailItem = ({ cocktail }) => {
  const { id, name, image, ingredients } = cocktail;

  return (
    <div className="cocktail-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailItem;
