//code to dynamically create the nav

const createNav = () => {
  const navBar = document.querySelector(".navbar");
  navBar.innerHTML = `
    <nav>
    <!--main logo-->
    <img class="logo" src="../images/logo.jpg" alt="main logo" />
    <!--input and button-->
    <div class="input-search-space">
      <input type="text" class="search-box" placeholder="search a manga" />
      <button class="search-btn"">search</button>
    </div>
  </nav>
  
  
  <section id="main-drop-downs">
    <ul>
      <li class="drop-down">best sellers</li>
      <div class="hidden-display">
        <li>comics</li>
        <li>games</li>
        <li>gadget</li>
      </div>
    </ul>
    <ul>
      <li class="drop-down">last releases</li>
      <div class="hidden-display">
        <li>comics</li>
        <li>games</li>
        <li>gadget</li>
      </div>
    </ul>
  </section>
    `;
};
createNav();

//code for the dropdown menus
const dropDownsTitles = document.querySelectorAll(".drop-down");
const hiddenDropDowns = document.querySelectorAll(".hidden-display");

for (let i = 0; i < dropDownsTitles.length; i++) {
  const firstDropDown = dropDownsTitles[0];
  const secondDropDown = dropDownsTitles[1];
  for (let a = 0; a < hiddenDropDowns.length; a++) {
    const firstHiddenDisplay = hiddenDropDowns[0];
    const secondHiddenDisplay = hiddenDropDowns[1];
    //code to display the first dropdown menu
    firstDropDown.addEventListener("click", () => {
      firstHiddenDisplay.style.display = "block";
    });
    firstDropDown.addEventListener("mouseover", () => {
      firstHiddenDisplay.style.display = "none";
    });
    //code to display the second dropdown menu
    secondDropDown.addEventListener("click", () => {
      secondHiddenDisplay.style.display = "block";
    });
    secondDropDown.addEventListener("mouseover", () => {
      secondHiddenDisplay.style.display = "none";
    });
  }
}
