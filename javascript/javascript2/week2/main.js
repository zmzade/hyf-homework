console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  productsUl.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

renderProducts(products);

/*

When the user writes something in the search input field.
 The products should be updated to only include the products that match the name.

So what event should we listen for in the addEventListener method?
 And what element should we listen on?

Use the overview shown above and the renderProducts function.
*/

const divInput = document.getElementById("search-box");
divInput.addEventListener("input", function (event) {
  const userProduct = event.target.value;
  console.log(userProduct);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(userProduct.toLowerCase())
  );
  if (userProduct) {
    return renderProducts(filteredProducts);
  }
  return renderProducts(products);
});
//Lets help a user to find cheap products!
//When the user writes a maximum price
//the products should be filtered to match that maximum price
//Hint: Break this task into smaller tasks!
const rangeDiv = document.getElementById("start");
rangeDiv.addEventListener("click", function (event) {
  const userRange = event.target.value;
  const cheapProducts = products.filter(
    (product) => product.price <= userRange * 1000
  );
  return renderProducts(cheapProducts);
});
//Sort the products
//Give the user the possibility to sort the products.
//That could fx be on price, name, rating or all of the above!

const selectDiv = document.getElementById("sort-options");
selectDiv.addEventListener("input", function (event) {
  const userOption = event.target.value;
  console.log(userOption);
  if (userOption === "name") {
    const nameSort = products.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return renderProducts(nameSort);
  }
  if (userOption === "cheap") {
    const cheapSort = products.sort((a, b) => a.price - b.price);
    return renderProducts(cheapSort);
  }
  const expensiveSort = products.sort((a, b) => (a.price > b.price ? -1 : 1));
  return renderProducts(expensiveSort);
});
