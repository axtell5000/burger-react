import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  // Object.keys returns an array of strings that represents the property names of an object, in this case
  // props.ingredients
  let transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
      return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      } );
    } )
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  // 1) Mapping through array of property names we created using Object.key
  // 2) Then we are creating another array with the number of elements equal to the number of a specific ingredient (we
  // obtain this by props.ingredients[igKey], we dont really care whats inside these elements).
  // 3) Then we map through that array to display the specific ingredient, we base the amount that needs to be displayed
  // by the amount of array elements of the array we are mapping through
  // 4) Then we flatten the array so we can get a more accurate length
  // 5) Whats happening in the reduce is creating a flat array from an array of arrays, taking each element and
  // concat them into that flat array, arr - the accumulated values, el - current element, initial value of empty array

  console.log('Hello',transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
