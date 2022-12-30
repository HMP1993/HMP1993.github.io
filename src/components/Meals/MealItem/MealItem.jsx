import React from "react";

const MealItem = (props) => {
const price = `$${props.price.toFixed(2)}`

  return (
    <li>
      <div>
        <h1>{props.name} </h1>
        <div>{props.description} </div>
        <div>{price} </div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
