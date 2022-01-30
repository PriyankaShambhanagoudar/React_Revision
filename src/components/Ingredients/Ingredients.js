import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setIserIngredients] = useState([]);

  const addIngredientsHandler = (ingredients) => {
    setIserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredients },
    ]);
  };
  const removeIngredientsHandler = (ingredientsId) => {
    setIserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredients) => ingredients.id !== ingredientsId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
