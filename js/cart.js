/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbodyRow = document.querySelector('#cart tbody:first-child')
  console.log(tbodyRow)
  if (tbodyRow) {
    let cartTableRow = document.querySelector('#cart tbody tr');
    cartTableRow.remove()
  }
}



// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let storedItems = localStorage.getItem('cartItems');
  let parsedItems = JSON.parse(storedItems);
  console.log(parsedItems.items.length);

  // DONE: Find the table body
  let carTableBody = document.getElementById('cart')
  // TODO: Iterate over the items in the cart
  for (let i=0; i < parsedItems.items.length; i++) {

  // DONE: Create a TR
  let cartTbody = document.querySelector('#cart>tbody');
  let tr = document.createElement('tr')
  cartTbody.appendChild(tr)
  
  // : DONE create a TD for the delete link, quantity,  and the item
  let td = document.createElement('td');
  
  let text = `${parsedItems.items[i].quantity}, ${parsedItems.items[i].product}`
  td.textContent = text;
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tr.appendChild(td); 
  }
}
function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem
  // TODO: Save the cart back to local storage
  
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
