const menuButton = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
menuButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

menuButton.addEventListener("mouseover", () => {
  dropdownMenu.classList.remove("hidden");
});
let timeoutID;
menuButton.addEventListener("mouseout", () => {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout(() => {
    dropdownMenu.classList.toggle("hidden");
  }, 2000);
});
