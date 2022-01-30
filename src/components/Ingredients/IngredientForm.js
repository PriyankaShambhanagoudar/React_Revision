import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {

  //const inputState = useState({ title: "", amount: "" });//old way 
  // const [inputState, setInputState] = useState({ title: "", amount: "" });//new way modern js single state

  //when we have multiple states
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');




  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
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
              // value={inputState.title}//new way modern js 
              value={enteredTitle}  //multiple states
              onChange={(event) => {

                /*  const newTitle = event.target.value;
 
                  inputState[1]((prevInputState) => ({   //old way
 
                // new way modern js single states

                 setInputState((prevInputState) => ({
                   title: newTitle,
                   amount: prevInputState.amount,
                 })); */

                //multiple states
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>

            <input
              type="number"
              id="amount"
              //   value={inputState[0].amount}//old way
              //  value={inputState.amount}//new way modern js 

              value={enteredAmount} //multiple states

              onChange={(event) => {
                /*    const newAmount = event.target.value;

                   // inputState[1](prevInputState => ({//old way

                 setInputState(prevInputState => ({//new way modern js
                    amount: newAmount,
                     title: prevInputState.title,
                   })); */


                //multiple states
                setEnteredAmount(event.target.value);
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
