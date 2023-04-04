const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-items");
menuButton.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
});

menuButton.addEventListener("mouseover", () => {
  menuItems.classList.remove("hidden");
});
let timeoutID;
menuButton.addEventListener("mouseout", () => {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout(() => {
    menuItems.classList.toggle("hidden");
  }, 1000);
});
