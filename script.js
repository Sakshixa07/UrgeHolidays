document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');

  document.querySelectorAll('.custom-grid .card img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;

      lightbox.style.display = 'block'; // show lightbox
      setTimeout(() => {
        lightbox.classList.add('show'); // trigger zoom
      }, 50);
    });
  });

  // close on click anywhere
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show'); // shrink back
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 500); // wait for transition
  });
});
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.style.top = "0";
  } else {
    // scrolling down → hide navbar
    navbar.style.top = "-70px"; // adjust based on navbar height
  }
  prevScrollPos = currentScrollPos;
});
