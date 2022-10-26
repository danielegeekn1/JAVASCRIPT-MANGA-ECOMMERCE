//code to activate the scrollbar on product section
const mangaCollections = document.querySelectorAll(".manga-collection");
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
const cartSection = document.querySelector(".cart-section");

mangaCollections.forEach((item, i) => {
  //code to get the correct dimension of each manga collection
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;
  //code to set the event for scrollbar
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});
//code for the cart section

addToCartBtn = document.querySelectorAll(".add-to-cart");
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  for (let i = 0; i < addToCartBtn.length; i++) {
    clickBtn = addToCartBtn[i];
    console.log(clickBtn);
    clickBtn.addEventListener("click", addToCartClick);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

//code to add product in the cart

function addToCartClick(e) {
  let target = e.target;
  console.log(target);
  let mainShop = target.parentElement;
  let title = mainShop.getElementsByClassName("manga-release")[0].innerText;
  let actualPrice = mainShop.getElementsByClassName("actual-price").innerText;
  let imageSrc = mainShop.getElementsByClassName("img-cover")[0].src;
  addItemToCart(title, actualPrice, imageSrc);
  updateCartTotal();
}
function addItemToCart(title, actualPrice, imageSrc) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  console.log(cartItems, "CART ITEMSSS");
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  //code to check if an item has already been added, in this case that won't be possibile and the alert will fire
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  //code to add dynamically the item we added in the cart
  let cartRowContents = `
  <div class="cart-item cart-column">
  <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
  <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${actualPrice}</span>
<div class="cart-quantity cart-column">
  <input class="cart-quantity-input" type="number" value="1">
  <button class="btn btn-danger" type="button">REMOVE</button>
</div>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  //code to change or remove the item we added in the cart
  //then we'll have to declare our functions we defined within our event listeners
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

//code to update cart Total
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("€", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
//function to remove our item we added in the cart that we declared in our event listener that we called in addItemToCart function
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}
//function to change our item we added in the cart that we declared in our event listener that we called in addItemToCart function
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
//code to set the purchase in our cart
function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}
