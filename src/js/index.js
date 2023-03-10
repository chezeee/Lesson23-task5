/**
 * @param {string[]} items
 */
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector("#shopping-list");

  items.forEach((product) => {
    shoppingList.insertAdjacentHTML("beforeend", `<li>${product}</li>`);
  });
};

// Sample usage - do not modify
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
renderShoppingList(sampleList);
