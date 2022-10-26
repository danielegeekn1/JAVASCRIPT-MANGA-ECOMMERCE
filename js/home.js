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

//code to add product in the cart
addToCartBtn = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartBtn.length; i++) {
  clickBtn = addToCartBtn[i];
  console.log(clickBtn);
  clickBtn.addEventListener("click", addToCartClick);
}

function addToCartClick(e) {
  let target = e.target;
  console.log(target);
  let mainShop = target.parentElement;
  let title = mainShop.getElementsByClassName("manga-release")[0].innerText;
  let actualPrice = mainShop.getElementsByClassName("actual-price").innerText;
  let imageSrc = mainShop.getElementsByClassName("img-cover")[0].src;
  addItemToCart(title, actualPrice, imageSrc);
  //updateCartTotal();
}
function addItemToCart(title, actualPrice, imageSrc) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  console.log(cartItems, "CART ITEMSSS");
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
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
}
//code to update cart Total
/*function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("manga-container")[0];
  var cartRows = cartItemContainer.getElementsByClassName("manga-info");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    console.log(cartRow);
    var priceElement = cartRow.getElementsByClassName("actual-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("€", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
*/
