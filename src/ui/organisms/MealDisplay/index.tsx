import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import MealsProvider from "../../../providers/MealsProvider"
import MealList from './MealList';
import MealCounter from './MealCounter';

function MealDisplay() {
  return (
    <MealsProvider>
      <MealList />
      <MealCounter />
    </MealsProvider>
  );
};

export default MealDisplay;