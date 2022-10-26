//code to activate the scrollbar on product section
const mangaCollections = document.querySelectorAll(".manga-collection");
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

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
  let actualPrice =
    mainShop.getElementsByClassName("actual-price")[0].innerText;
  let imageSrc = mainShop.getElementsByClassName("img-cover")[0].src;
  addItemToCart(title, actualPrice, imageSrc);
}
function addItemToCart(title, actualPrice, imageSrc) {
  let cartRow = document.createElement("div");
  mangaInfo = document.querySelectorAll(".manga-release");
  cartSection = document.querySelector(".cart-section");
  /*for (let i = 0; i < mangaInfo.length; i++) {
    if (mangaInfo[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }*/

  let cartRowContents = `
  <section class="manga-container">
          <div class="manga-image">
            <span class="discount-item">discount - 50% off</span>
            <img
              class="img-cover"
              src="${imageSrc}"
              alt="last demon slayer release"
            />
          </div>
          <div class="manga-info">
            <h3 class="manga-release">${title}</h3>
            <span class="actual-price">${actualPrice}</span>
          </div>
          <button class="remove-from-cart">remove from cart</button>
        </section>
  `;
  cartRow.innerHTML = cartRowContents;
  cartSection.append(cartRow);
}
