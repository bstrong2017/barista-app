import React from "react";
// import BaristaForm from "./BaristaForm";
const RecipeChoices = ({ handleChange, label, choices, checked }) => {
  return (
    <div className="radio-buttons">
      <ul>
      <input
              type="text"
              name={label}
              value={checked}
              placeholder="Guess the ingredient"
              onChange={handleChange} 
              className="textbox"/>
              
        {choices &&
          choices.map((choice) => (
            <li key={choice}>

              {/* <input
              type="text"
              name={label}
              value={checked}
              placeholder="Guess the ingredient"
              onChange={handleChange} 
              className="textbox"/>
               */}
              {choice}

            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecipeChoices;


{/* <input
              type="text"
              name={label}
              value={currentVal}
              placeholder="Guess the ingredient..."
              onChange={handleChange}
              className = "textbox"
              /> */}

              {/* <input
                id={choice} //keep track of what our form recoginizes as choice
                value={choice}
                name={label} //groups input button together so that app recognizes it
                type="radio"
                onChange={handleChange}
                checked={checked === choice}
              /> */}