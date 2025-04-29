document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel variables
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((carousel) => {
      const slides = carousel.querySelector('.carousel-slides');
      const prevButton = carousel.querySelector('.carousel-prev');
      const nextButton = carousel.querySelector('.carousel-next');
      const slideItems = slides.querySelectorAll('img, video'); // Select both images and videos
      const totalSlides = slideItems.length;
      let currentIndex = 0;

      // Function to update the carousel
      function updateCarousel() {
          slides.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
      }

      // Move to the next slide
      nextButton.addEventListener('click', function() {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateCarousel();
      });

      // Move to the previous slide
      prevButton.addEventListener('click', function() {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateCarousel();
      });

      // Add click event on images to open them in a lightbox
      slideItems.forEach((item) => {
          if (item.tagName === 'IMG') {
              item.addEventListener('click', function() {
                  openLightbox(item.src, 'img');
              });
          } else if (item.tagName === 'VIDEO') {
              item.addEventListener('click', function() {
                  openLightbox(item.querySelector('source').src, 'video');
              });
          }
      });
  });

  // Create a lightbox element dynamically
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.display = 'none'; // Ensure it's hidden initially
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100vw';
  lightbox.style.height = '100vh';
  lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.zIndex = '9999';

  const lightboxContent = document.createElement('div');
  lightbox.appendChild(lightboxContent);

  const closeButton = document.createElement('button');
  closeButton.innerText = '×';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.fontSize = '2rem';
  closeButton.style.color = '#fff';
  closeButton.style.background = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';
  lightbox.appendChild(closeButton);

  document.body.appendChild(lightbox);

  // Function to open the lightbox with a specific media
  function openLightbox(src, type) {
      lightboxContent.innerHTML = ''; // Clear previous content

      if (type === 'img') {
          const img = document.createElement('img');
          img.src = src;
          img.style.maxWidth = '90%';
          img.style.maxHeight = '90%';
          lightboxContent.appendChild(img);
      } else if (type === 'video') {
          const video = document.createElement('video');
          video.src = src;
          video.controls = true;
          video.style.maxWidth = '90%';
          video.style.maxHeight = '90%';
          lightboxContent.appendChild(video);
      }

      lightbox.style.display = 'flex'; // Show the lightbox when an image/video is clicked
  }

  // Close lightbox functionality
  closeButton.addEventListener('click', function() {
      lightbox.style.display = 'none';
      lightboxContent.innerHTML = ''; // Clear the content
  });
  
// Close lightbox when clicking outside the content
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxContent.innerHTML = ''; // Clear the content
  }
});
});

  document.addEventListener('DOMContentLoaded', function () {
    // Create the "Home" button dynamically
    const returnBtn = document.createElement('a');
    returnBtn.href = 'index.html';
    //returnBtn.target = '_blank'; // Opens in a new tab
    returnBtn.classList.add('return-btn');
    returnBtn.textContent = 'Home';
    document.body.appendChild(returnBtn);
  
    // Show/Hide button based on scroll position
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) { // Show button after scrolling 200px
        returnBtn.style.display = 'block';
        returnBtn.classList.add('scrolled');
      } else {
        returnBtn.style.display = 'block'; // Always visible, even at top
        returnBtn.classList.remove('scrolled');
      }
    });
  });