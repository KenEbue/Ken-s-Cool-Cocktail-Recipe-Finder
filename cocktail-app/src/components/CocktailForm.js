import React, { useState } from 'react';

const CocktailForm = () => {
  const [name, setName] = useState('');
  const [recipe, setRecipe] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new cocktail object with the form data
    const newCocktail = {
      name,
      recipe,
      instructions,
    };

    // TODO: Make a POST request to the API endpoint to add the new cocktail

    // Reset the form fields after submission
    setName('');
    setRecipe('');
    setInstructions('');
  };

  return (
    <div>
      <h2>Create a New Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="recipe">Recipe:</label>
          <input
            type="text"
            id="recipe"
            value={recipe}
            onChange={(event) => setRecipe(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CocktailForm;
