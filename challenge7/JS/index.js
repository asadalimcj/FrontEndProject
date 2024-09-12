// Wait for the DOM to be fully loaded

document.addEventListener("DOMContentLoaded", function () {
  // Function to change the image when the screen width is 700 pixel
  let bar = document.getElementById("bar");
  let close = document.getElementById("close");

  bar.addEventListener("click", function () {
    let nav = document.querySelector("nav").classList.add("active");
  });
  close.addEventListener("click", function(){
    let nav = document.querySelector("nav").classList.remove("active");
  })

  function changeImage() {
    // Check if the screen width is 700 pixels or less
    if (window.innerWidth <= 700) {
      // Select the image with the 'hero' class
      var heroImage = document.querySelector(".hero");
      // Change the source attribute of the image
      heroImage.src = "images/image-hero-mobile.png"; // Replace 'new_image_url.jpg' with the URL of the new image
      // Optionally, you can also change the alt attribute
      heroImage.alt = "New Alt Text"; // Replace 'New Alt Text' with the new alt text for the image
    }
  }

  // Call the function initially
  changeImage();

  // Listen for window resize event
  window.addEventListener("resize", function () {
    // Call the function whenever the window is resized
    changeImage();
  });
});
