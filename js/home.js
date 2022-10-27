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
  let removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
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
  let cartItems = document.getElementsByClassName("cart-items")[0];
  console.log(cartItems, "CART ITEMSSS");
  let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  //code to check if an item has already been added, in this case that won't be possibile and the alert will fire
  for (let i = 0; i < cartItemNames.length; i++) {
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
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("€", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "€" + total;
}
//function to remove our item we added in the cart that we declared in our event listener that we called in addItemToCart function
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}
//function to change our item we added in the cart that we declared in our event listener that we called in addItemToCart function
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
//code to set the purchase in our cart
function purchaseClicked() {
  alert("Thank you for your purchase");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}
//code to activate the search bar in the navbar

const Btn = document.querySelector(".search-btn");

Btn.addEventListener("click", searchBox);
function searchBox(e) {
  e.preventDefault();
  const input = document.querySelector(".search-box").value;
  const mangaName = document.querySelectorAll(".manga-release");
  for (let i = 0; i < mangaName.length; i++) {
    let name = mangaName[i].textContent;
    //console.log(name);
    let demonSlayer = mangaName[0].textContent;
    let dragonBall = mangaName[1].textContent;
    let onePiece = mangaName[2].textContent;
    let soulEater = mangaName[3].textContent;
    let detectiveConan = mangaName[4].textContent;
    let promisedNeverland = mangaName[5].textContent;
    let shamanKing = mangaName[6].textContent;
    let myHeroAcademy = mangaName[7].textContent;
    let KomiCantCommunicate = mangaName[8].textContent;
    let onePunchMan = mangaName[9].textContent;
    let fairyTail = mangaName[10].textContent;
    let frieren = mangaName[11].textContent;
    let radiant = mangaName[12].textContent;
    let gantz = mangaName[13].textContent;
    let hanakoKun = mangaName[14].textContent;
    let sengoku = mangaName[15].textContent;

    //code to set the cases
    //according to what the user is searching he'll be renderd to the section of the product he is looking for
    switch (input) {
      case demonSlayer:
        window.location.href = "#demon-slayer";
        break;
      case dragonBall:
        window.location.href = "#dragon-ball";
        break;
      case onePiece:
        window.location.href = "#one-piece";
        break;
      case soulEater:
        window.location.href = "#soul-eater";
        break;
      case detectiveConan:
        window.location.href = "#detective-conan";
        break;
      case promisedNeverland:
        window.location.href = "#promised-neverland";
        break;
      case shamanKing:
        window.location.href = "#shaman-king";
        break;
      case myHeroAcademy:
        window.location.href = "#my-hero-academy";
        break;
      case KomiCantCommunicate:
        window.location.href = "#komi";
        break;
      case onePunchMan:
        window.location.href = "#one-punch-man";
        break;
      case fairyTail:
        window.location.href = "#fairy-tail";
        break;
      case frieren:
        window.location.href = "#frieren";
        break;
      case radiant:
        window.location.href = "#radiant";
        break;
      case gantz:
        window.location.href = "#gantz";
        break;
      case hanakoKun:
        window.location.href = "#hanako-kun";
        break;
      case sengoku:
        window.location.href = "#sengoku";
        break;
    }
  }
}
