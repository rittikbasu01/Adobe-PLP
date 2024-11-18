// Initializing variables
const productListContainer = document.querySelector(".product-list");
const loadMoreButton = document.querySelector(".load-more");
const filterContainer = document.querySelector(".filters-container");
const sortSelect = document.querySelector(".sort-select"); // Add this for sorting
const itemCountContainer = document.querySelector(".item-count"); // Counter for the number of items
const itemCountContainerForMobile = document.querySelector(".apply-filters"); // Counter for the number of items
let allProducts = [];
let displayedProducts = 0;
let productsPerLoad = 9; // Default for desktop
let filteredProducts = []; // To store the filtered products
let selectedCategories = []; // Keep track of selected filters

// Fetch products from Fakestore API
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    allProducts = data;
    filteredProducts = allProducts; // Initially, no filter, show all products
    renderProducts(); // Initially render all products
    populateFilters(); // Populate filter options dynamically
  } catch (error) {
    console.error("Failed to fetch products:", error);
    productListContainer.innerHTML = "<p>Failed to load products.</p>";
  }
};

// Function to adjust the number of products per load based on screen size
const adjustProductsPerLoad = () => {
  if (window.innerWidth <= 768) {
    productsPerLoad = 8; // Mobile/Tablet
  } else {
    productsPerLoad = 9; // Desktop
  }
};

// Render products based on the current displayedProducts count
const renderProducts = () => {
  const productsToRender = filteredProducts.slice(
    displayedProducts,
    displayedProducts + productsPerLoad
  );

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class='prod-img-container'>
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <h3>${product.title}</h3>
      <div class="price">$${product.price}</div>
      <button>Add to Cart</button>
    `;

    productListContainer.appendChild(productCard);
  });

  // Update the count of displayed products
  displayedProducts += productsToRender.length;

  // If all products have been displayed, hide the "Read More" button
  if (displayedProducts >= filteredProducts.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "block";
  }

  // Update item count display
  updateItemCountDisplay();
  updateItemCountDisplayForMobile();
};

// Load more products when the "Read More" button is clicked
loadMoreButton.addEventListener("click", () => {
  adjustProductsPerLoad(); // Adjust based on screen size before rendering
  renderProducts();
});

// Filter products by category
const filterProductsByCategory = () => {
  if (selectedCategories.length === 0) {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }
  applySortFilter(); // Apply sorting after filtering
  productListContainer.innerHTML = ""; // Clear existing products
  displayedProducts = 0; // Reset the displayed products counter
  renderProducts(); // Render the filtered products
};

// Populate filter options dynamically
const populateFilters = () => {
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];
  categories.forEach((category) => {
    const filterLabel = document.createElement("label");
    filterLabel.innerHTML = `
      <input type="checkbox" class="category-filter" value="${category}" />
      ${category}
    `;
    filterContainer.appendChild(filterLabel);
  });
  
  // Add event listeners to filter checkboxes
  const categoryFilters = document.querySelectorAll(".category-filter");
  categoryFilters.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        selectedCategories.push(e.target.value);
      } else {
        selectedCategories = selectedCategories.filter(
          (cat) => cat !== e.target.value
        );
      }
      filterProductsByCategory(); // Re-filter products when checkbox changes
    });
  });
};

// Sort products by price or rating
const applySortFilter = () => {
  const sortOption = sortSelect.value;

  if (sortOption === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price); // Sort by price ascending
  } else if (sortOption === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price); // Sort by price descending
  } else if (sortOption === "rating-asc") {
    filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate); // Sort by rating ascending
  } else if (sortOption === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating descending
  }

  // After sorting, re-render the products
  productListContainer.innerHTML = "";
  displayedProducts = 0;
  renderProducts();
};

// Add event listener for sorting
sortSelect.addEventListener("change", () => {
  applySortFilter();
});

// Update the item count display
const updateItemCountDisplay = () => {
  const totalItems = filteredProducts.length;
  itemCountContainer.textContent = `${totalItems} Results`; // Update the text content
};

// Update the item count display
const updateItemCountDisplayForMobile = () => {

  const applyFilterElement = document.querySelector('.apply-filters');
    if (applyFilterElement) {
      const totalItems = filteredProducts.length;
      itemCountContainerForMobile.textContent = `See ${totalItems} results`; // Update the text content
    } else {
    }
};

// Initialize product list and category filter
const init = () => {
  fetchProducts(); // Fetch products from the API
};

init();
