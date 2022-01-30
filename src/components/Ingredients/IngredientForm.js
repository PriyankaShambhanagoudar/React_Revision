import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {

  //const inputState = useState({ title: "", amount: "" });//old way 
  const [inputState, setInputState] = useState({ title: "", amount: "" });//new way modern js 


  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              // value={inputState[0].title}//old way
              value={inputState.title}//new way modern js 
              onChange={(event) => {
                const newTitle = event.target.value;
                //  inputState[1]((prevInputState) => ({   //old way
                setInputState((prevInputState) => ({ //new way modern js 
                  title: newTitle,
                  amount: prevInputState.amount,
                }));
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>

            <input
              type="number"
              id="amount"
              //   value={inputState[0].amount}//old way
              value={inputState.amount}//new way modern js 
              onChange={(event) => {
                const newAmount = event.target.value;
                // inputState[1](prevInputState => ({//old way
                setInputState(prevInputState => ({//new way modern js 
                  amount: newAmount,
                  title: prevInputState.title,
                }));
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
