class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    let price = 0;
    switch (currency) {
      case "dollars": {
        price = this.price / 6.2646;
        price = price.toFixed(0) + "$";
        break;
      }
      case "euro": {
        price = this.price / 7.43622;
        price = price.toFixed(0) + "€";
        break;
      }
    }
    return price;
  }
}
//---------------------------------------------
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const newProductsArr = this.products.filter(
      (item) => product.name !== item.name
    );
    this.products = newProductsArr;
  }

  searchProduct(productName) {
    const searchResults = this.products.filter(
      (item) => item.name === productName
    );

    this.renderProducts(searchResults);
  }

  getTotal() {
    const total = this.products.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);
    const sum = document.createElement("p");
    document.body.appendChild(sum);
    sum.innerHTML = `total: ${total}`;
  }

  renderProducts() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const header = document.createElement("h3");
    header.innerHTML = "products and Price";
    div.appendChild(header);
    this.products.forEach((item) => {
      const productName = document.createElement("p");
      div.appendChild(productName);
      productName.innerHTML = `Product: ${item.name} <br> Price: ${item.price}`;
    });
  }

  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        const user = document.createElement("h2");
        document.body.appendChild(user);
        user.innerHTML = `User: ${data.name}`;
      })
      .then(() => this.renderProducts())
      .then(() => this.getTotal());
  }
}

//----------------------------------------------------------------
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const item2 = new Product("video-game", 5000);
shoppingCart.addProduct(item2);
console.log(shoppingCart.products);
//shoppingCart.searchProduct("video-game");

shoppingCart.renderProducts();
shoppingCart.getUser();
//------------------------------------------------------------------------
// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars")); // 7.5
console.log(plant.convertToCurrency("euro")); // 7.5
//-----------------------------------------------
const input = document.querySelector("input");
function findProducts(event) {
  const searchWord = event.target.value;
  const searchBox = document.getElementById("search-result");
  searchBox.innerHTML = searchWord;
  shoppingCart.searchProduct(searchWord);
}

input.addEventListener("keyup", findProducts);
