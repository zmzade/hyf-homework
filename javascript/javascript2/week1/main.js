//console.log("Script loaded");

//const products = getAvailableProducts();
//console.log(products);

const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  const ul = document.querySelector("ul");
  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<h2>${products[i].name}</h2><span>price: ${products[i].price}</span><br><span>Rating: ${products[i].rating}</span>`;
    ul.appendChild(li);
  }
  return ul;
}

renderProducts(products); // This should create the ul and the li's with the individual products details
