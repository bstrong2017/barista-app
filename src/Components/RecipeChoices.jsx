import React from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
  return (
    <div className="radio-buttons">
      <ul>
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              <input
                id={choice} //keep track of what our form recoginizes as choice
                value={choice}
                name={label} //groups input button together so that app recognizes it
                type="radio"
                onChange={handleChange}
                checked={checked === choice}
              />
              {choice}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecipeChoices;
