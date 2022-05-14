// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

// this function will calculate how much an order of spaghetti, including optional toppings and a drink, will cost at Spock's Super Safe Space Station Spectacular Spaghetti Shop by checking what was selected in the drop down menus provided in the HTML portion of the menu.
function spaghettiOrderClicked() {
  //getting input from user.
  let desiredSize = document.getElementById('size').value
  let desiredTopping = document.getElementById('topping').value
  let desiredDrink = document.getElementById('drink').value 
  //defining constants
  const TAX_RATE = 0.13
  const SIZE_REGULAR = 17.99
  const SIZE_SHARED = 23.99
  const SIZE_KIDS = 8.99
  const TOPPING_MEATBALLS = 3.00
  const TOPPING_CHEESE = 0.50
  const TOPPING_GARLIC = 0.50
  const TOPPING_CHILI_PEPPERS = 1.50
  const TOPPING_CHICKEN = 3.00
  const TOPPING_SHRIMP = 3.00
  const TOPPING_BACON = 3.00
  const TOPPING_SPINACH = 1.00
  const TOPPING_NONE = 0.00
  const DRINK_BOXED_WATER = 2.50
  const DRINK_RED_BULL = 4.00
  const DRINK_DIET_COKE = 2.00
  const DRNK_COKE = 2.00
  const DRINK_NONE = 0.00
  //defining variables of the size and topping and drink so they can be redefined later hopefully so i don't get the initialization error 
  let size = 0
  let topping = 0
  let drink = 0
  //checking for the price of the size 
  if (desiredSize == kids) {
    let size = SIZE_REGULAR
  }
  else if (desiredSize == regular) {
    let size = SIZE_REGULAR
  }
  else {
    let size = SIZE_SHARED
  }
  //checking for the price of the topping
  if (desiredTopping == meatballs) {
    let topping = TOPPING_MEATBALLS
  }
  else if (desiredTopping == cheese) {
    let topping = TOPPING_CHEESE
  }
  else if (desiredTopping == garlic) {
    let topping = TOPPING_GARLIC
  }
  else if (desiredTopping == chili-peppers) {
    let topping = TOPPING_CHILI_PEPPERS
  }
  else if (desiredTopping == chicken) {
    let topping = TOPPING_CHICKEN
  }
  else if (desiredTopping == shrimp) {
    let topping = TOPPING_SHRIMP
  }
  else if (desiredTopping == bacon) {
    let topping = TOPPING_BACON
  }
  else if (desiredTopping == spinach) {
    let topping = TOPPING_SPINACH
  }
  else {
    let topping = TOPPING_NONE
  }
  //checking for the price of the drink
  if (desiredDrink == boxed-water) {
    let drink = DRINK_BOXED_WATER
  }
  else if (desiredDrink == red-bull) {
    let drink = DRINK_RED_BULL
  }
  else if (desiredDrink == diet-coke) {
    let drink = DRINK_DIET_COKE
  }
  else if (desiredDrink == coke) {
    let drink = DRINK_COKE
  }
  else {
    let drink = DRINK_NONE
  }
  //calculation of the price 
  let subtotal = size + topping + drink
  let tax = subtotal * TAX_RATE
  let total = subtotal + tax
  //display the information to the user
  document.getElementById('spaghetti-cost').innerHTML = 
}