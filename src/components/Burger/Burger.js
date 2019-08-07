import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let arrayedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,idx) => {
                return <BurgerIngredient key={igKey+ idx} type={igKey} />;
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el);
        },[]);

    if(arrayedIngredients.length === 0)
        arrayedIngredients = <p> please select ingredients </p>
    return (
        <div className={classes.Burger}>
           <BurgerIngredient type={"top-bread"} />
            {arrayedIngredients}
            <BurgerIngredient type={"bottom-bread"} />
        </div>
    );
};

export default burger;