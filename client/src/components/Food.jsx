import React from 'react';

const Food = (food) => {
  return (
    <div>
      <img>{food.img}</img>
      <h3>{food.name}</h3>
      <h3>{food.price}</h3>
      <p>{food.description}</p>
    </div>
  );
}

export default Food;
