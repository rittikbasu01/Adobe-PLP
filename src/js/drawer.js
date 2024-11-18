// Select the hamburger menu and drawer elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const drawer = document.querySelector(".drawer");
const closeButton = document.querySelector(".close-drawer"); // Optional close button inside the drawer

// Event listener to open the drawer when hamburger menu is clicked
hamburgerMenu.addEventListener("click", () => {
  drawer.classList.add("open");
});

// Event listener to close the drawer (either through a close button or clicking outside)
closeButton?.addEventListener("click", () => {
  drawer.classList.remove("open");
});

// Optional: Close drawer if clicked outside (on the backdrop area)
document.addEventListener("click", (e) => {
  if (!drawer.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    drawer.classList.remove("open");
  }
});
