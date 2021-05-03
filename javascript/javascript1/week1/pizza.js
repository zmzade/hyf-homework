// main exercise: part one
console.log('I love pizza');
let myFavoritePizza = 'pepperoni'
let pizzaPrice = 50
console.log(` New pizza order: ${myFavoritePizza}. The price of the pizza is: ${pizzaPrice}`);
// part one end

// part two
let numberOfOrder= 3 
let familySize = true
let totalPrice = pizzaPrice * numberOfOrder
// I used if/else for family pizza or not, step.3
if (true) {
    console.log (`total price: ${totalPrice * 2}`)
} else {
    console.log(`total price: ${totalPrice}`)
}
// the following code is for step 4
if (true){
    console.log(`New pizza order: ${numberOfOrder} family size ${myFavoritePizza}. Total cost for the order is: ${totalPrice * 2}`)

} else {
    console.log(`New pizza order: ${numberOfOrder} normal size ${myFavoritePizza}. Total cost for the order is: ${totalPrice}`)
}