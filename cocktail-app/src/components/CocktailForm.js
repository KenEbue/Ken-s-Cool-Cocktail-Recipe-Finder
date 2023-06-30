import React, { useState } from 'react';

const CocktailForm = ({ onCocktailAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleIngredientChange = (event, index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = event.target.value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cocktailData = {
      name,
      image,
      ingredients,
    };

    try {
      const response = await fetch('API_URL/cocktails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cocktailData),
      });

      if (response.ok) {
        const newCocktail = await response.json();
        onCocktailAdd(newCocktail); // Pass the new cocktail data to the parent component
        setName('');
        setImage('');
        setIngredients([]);
      } else {
        console.error('Error adding cocktail:', response.status);
      }
    } catch (error) {
      console.error('Error adding cocktail:', error);
    }
  };

  return (
    <div>
      <h2>Add New Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={handleImageChange} required />
        </label>
        <label>
          Ingredients:
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
              required
            />
          ))}
          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </label>
        <button type="submit">Add Cocktail</button>
      </form>
    </div>
  );
};

export default CocktailForm;
