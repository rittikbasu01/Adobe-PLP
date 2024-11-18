const createNav = () => {
  const nav = document.querySelector(".navbar");
  const screenWidth = window.innerWidth; // Get the screen width

  // Get the drawer and filter-list sections
  const drawer = document.querySelector(".drawer");
  const filterList = document.querySelector(".filter-list");

  // Check if the screen width is less than or equal to 768px (tablet or mobile)
  if (screenWidth <= 768) {
    // Mobile or Tablet Screen: Show hamburger and drawer
    nav.innerHTML = `
      <div class="hamburger-menu">
        <i class="fa-solid fa-bars"></i> <!-- Hamburger Icon -->
      </div>
      <div class="brand-logo">VENIA</div>
      <div class="notifications">
        <i class="fa-solid fa-basket-shopping"></i>
      </div>
    `;

    // Drawer content: NavTabs and Filters
    drawer.innerHTML = `
      <div class="close-drawer">
        <div class="brand-logo">VENIA</div>
        <i class="fa-solid fa-xmark"></i> <!-- Close button for the drawer -->
      </div>
      <aside class="filter-list">
        <h3>Filters</h3>
        <div class="filters-container">
          <!-- Filters will be dynamically loaded here -->
        </div>
        <button class="apply-filters">See 0 Results</button>
      </aside>
    `;

    // Add event listener for the hamburger menu
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const closeDrawer = document.querySelector(".close-drawer");
    const applyFiltersButton = document.querySelector(".apply-filters");

    hamburgerMenu.addEventListener("click", () => {
      drawer.classList.add("open"); // Open the drawer
    });

    closeDrawer.addEventListener("click", () => {
      drawer.classList.remove("open"); // Close the drawer
    });

    applyFiltersButton.addEventListener("click", () => {
      console.log("hi")
      // Get selected filters (checkboxes that are checked)
      const selectedFilters = [];
      const filterOptions = document.querySelectorAll(".filter-option:checked");

      filterOptions.forEach((option) => {
        selectedFilters.push(option.value);
      });

      // Close the drawer
      drawer.classList.remove("open");

      // Apply the selected filters (you can modify this logic based on how you want to apply the filters to the product list)
      // applyFilters(selectedFilters);
    });

    // Hide the filter section in the main content for mobile view
    filterList.style.display = "none";
  } else {
    // Larger Screen: Show normal navbar with nav-tabs centered
    nav.innerHTML = `
      <div class="brand-logo">VENIA</div>
      <div class="nav-tabs">
        <a href="#" class="nav-tab active" data-page="home.html">Home</a>
        <a href="#" class="nav-tab" data-page="men.html">Men</a>
        <a href="#" class="nav-tab" data-page="women.html">Women</a>
        <a href="#" class="nav-tab" data-page="smart-gear.html">Smart Gear</a>
        <a href="#" class="nav-tab" data-page="accessories.html">Accessories</a>
      </div>
      <div class="notifications">
        <i class="fa-solid fa-basket-shopping"></i>
      </div>
    `;

    // Make the filter section visible in the main content for larger screens
    filterList.style.display = "block";
  }
};

// Call the createNav function when the page loads
createNav();

// Optional: Re-run the function on window resize to update the nav on screen size change
window.addEventListener("resize", createNav);
