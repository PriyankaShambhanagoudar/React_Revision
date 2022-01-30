import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setIserIngredients] = useState([]);

  useEffect(() => {
    fetch('https://reacthooks-3397b-default-rtdb.firebaseio.com/ingredients.json').then(response => response.json()).then(responseData => {
      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,

          amount: responseData[key].amount
        });
      }
      setIserIngredients(loadedIngredients);

    });
  }, []);


  const addIngredientsHandler = (ingredients) => {
    fetch('https://reacthooks-3397b-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify({ ingredients }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      return response.json();

    }).then(responseData => {
      setIserIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: responseData.name, ...ingredients },
      ]);

    });

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
