const createHome = () => {
  const screenWidth = window.innerWidth; // Get the screen width
  const banner = document.querySelector(".banner"); // Content wrapper to render content

  if (screenWidth <= 768) {
    // Mobile or Tablet Screen: Render the mobile version of the content
    banner.innerHTML = `
        <div class="banner">
          <div class="banner-img">
            <img src="./assets/banner.png " alt="Banner Image" />
          </div>
          <div class="banner-txt" class="banner-content-mobile">
            <p>Men’s<br />Outerwear</p>
          </div>
        </div>
       
      `;
  } else {
    // Larger Screen: Render the desktop version of the content
    banner.innerHTML = `
        <div class="banner">
          <div class="banner-txt">
            <p>Men’s<br />Outerwear</p>
          </div>
          <div class="banner-img">
            <img src="./assets/banner.png" alt="Banner Image" />
          </div>
        </div>
       
      `;
  }
};

// Call createHome function on page load
createHome();

// Optional: Re-run the function when the window is resized
window.addEventListener("resize", createHome);
