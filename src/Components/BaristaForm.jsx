import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksjson from './drinks.json';

const BaristaForm = () => {


  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });

  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  };

  const getNextDrink = () => {

    let randomDrinkIndex = Math.floor(Math.random() * drinksjson.drinks.length);
    setCurrentDrink(drinksjson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksjson.drinks[randomDrinkIndex].ingredients);
  }

  const onCheckAnswer = () =>{

  };

  const onNewDrink = () =>{
   
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': ''


     });

     getNextDrink();
  
  };
  

  return (
    <div>

      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
        >
          🔄
        </button>
      </div>

      {/* Temperature Ingredient */}
      <h3>Temperature</h3>
      <div className="answer-space" >
        {inputs["temperature"]} 
        </div>
        <RecipeChoices
        handleChange={(e) => setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
         }))}
         label="temperature"
         choices={ingredients["temperature"]}
         checked={inputs["temperature"]}
         />

         {/* Milk Ingredient */}
         <h3>Milk</h3>
         <div className="answer-space">
          {inputs["milk"]}
         </div>
         <RecipeChoices
         handleChange={(e) => setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
         }))}
         label="milk"
         choices={ingredients["milk"]}
         checked={inputs["milk"]}
         />

         {/* Syrup Ingredient */}
         <h3>Syrup</h3>
         <div className="answer=space">
          {inputs["syrup"]}
         </div>
         <RecipeChoices
         handleChange={(e) => setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
         }))}
         label="syrup"
         choices={ingredients["syrup"]}
         checked={inputs["syrup"]}
         />

         {/* Blended Ingredient*/}
         <h3>Blended</h3>
         <div className="answer-space">
          {inputs["blended"]}
         </div>
         <RecipeChoices
         handleChange={(e) => setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
         }))}
         label="blended"
         choices={ingredients["blended"]}
         checked={inputs["blended"]}
         />

      <form>

      </form>
      <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
      <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>New Drink</button>
    </div>
     
  );
  
};


export default BaristaForm;

