// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

// this function will calculate how much an order of spaghetti, including optional toppings and a drink, will cost at Spock's Super Safe Space Station Spectacular Spaghetti Shop by checking what was selected in the drop down menus provided in the HTML portion of the menu.
function spaghettiOrderClicked() {
  //getting input from user.
  let select = document.getElementById('size');
  let select2 = document.getElementById('topping');
  let select3 = document.getElementById('drink');
  let desiredSize = select.options[select.selectedIndex].value;
  let desiredTopping = select2.options[select2.selectedIndex].value;
  let desiredDrink = select3.options[select3.selectedIndex].value;
  //defining constants
  const TAX_RATE = 0.13;
  const SIZE_REGULAR = 17.99;
  const SIZE_SHARED = 23.99;
  const SIZE_KIDS = 8.99;
  const TOPPING_MEATBALLS = 3.00;
  const TOPPING_CHEESE = 0.50;
  const TOPPING_GARLIC = 0.50;
  const TOPPING_CHILI_PEPPERS = 1.50;
  const TOPPING_CHICKEN = 3.00;
  const TOPPING_SHRIMP = 3.00;
  const TOPPING_BACON = 3.00;
  const TOPPING_SPINACH = 1.00;
  const TOPPING_NONE = 0.00;
  const DRINK_BOXED_WATER = 2.50;
  const DRINK_RED_BULL = 4.00;
  const DRINK_DIET_COKE = 2.00;
  const DRNK_COKE = 2.00;
  const DRINK_NONE = 0.00;
  //checking for the price of the size 
  if (desiredSize == 'kids') {
    size = SIZE_KIDS
  }
  else if (desiredSize == 'regular') {
    size = SIZE_REGULAR
  }
  else {
    size = SIZE_SHARED
  }
  //checking for the price of the topping
  if (desiredTopping == 'meatballs') {
    topping = TOPPING_MEATBALLS;
  }
  else if (desiredTopping == 'cheese') {
    topping = TOPPING_CHEESE;
  }
  else if (desiredTopping == 'garlic') {
    topping = TOPPING_GARLIC;
  }
  else if (desiredTopping == 'chili-peppers') {
    topping = TOPPING_CHILI_PEPPERS;
  }
  else if (desiredTopping == 'chicken') {
    topping = TOPPING_CHICKEN;
  }
  else if (desiredTopping == 'shrimp') {
    topping = TOPPING_SHRIMP;
  }
  else if (desiredTopping == 'bacon') {
    topping = TOPPING_BACON;
  }
  else if (desiredTopping == 'spinach') {
    topping = TOPPING_SPINACH;
  }
  else {
    topping = TOPPING_NONE;
  }
  //checking for the price of the drink
  if (desiredDrink == 'boxed-water') {
    drink = DRINK_BOXED_WATER;
  }
  else if (desiredDrink == 'red-bull') {
    drink = DRINK_RED_BULL;
  }
  else if (desiredDrink == 'diet-coke') {
    drink = DRINK_DIET_COKE;
  }
  else if (desiredDrink == 'coke') {
    drink = DRINK_COKE;
  }
  else {
    drink = DRINK_NONE;
  }
  //calculation of the price 
  let subtotal = size + topping + drink;
  let tax = subtotal * TAX_RATE;
  let total = subtotal + tax;
  //display the information to the user
  document.getElementById('spaghetti-cost').innerHTML = 'Thank you for choosing Spock’s Super Safe Space Station Spectacular Spaghetti Shop for all of your spaghetti needs! Your subtotal was $' + subtotal.toFixed(2) + ' and your tax cost today was $' + tax.toFixed(2) + ' so this means that your total today comes to $' + total.toFixed(2) + '.';
}