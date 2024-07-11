// JavaScript functions for ONDC Project

// Search bar JAVA_SCRIPT

function ShowSearchBar() {
    document.getElementById('search').style.display = 'inline-block';
    document.getElementById('nav-search-close').style.display = 'inline-block';
    
    document.addEventListener('click', handleOutsideClickForSearch);
}

function HideSearchBar() {
    document.getElementById('search').style.display = 'none';
    document.getElementById('nav-search-close').style.display = 'none';
    
    document.removeEventListener('click', handleOutsideClickForSearch);
}

function handleOutsideClickForSearch(event) {
    const searchBar = document.getElementById('search');
    const closeButton = document.getElementById('nav-search-close');
    const submitButton = document.getElementById('submit');

    if (!searchBar.contains(event.target) && !closeButton.contains(event.target) && !submitButton.contains(event.target)) {
        HideSearchBar();
    }
}

document.getElementById('nav-search-close').addEventListener('click', (event) => {
    event.stopPropagation();
    HideSearchBar();
});

document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    ShowSearchBar();
});


// ----------------------------------------------------------------------------------------
// Nav-Bar-Hamburger Menu JAVA_SCRIPT

function toggleSideBar() {
    const hamburgerMenu = document.querySelector('.nav-hamburger-menu');
    hamburgerMenu.classList.toggle('active');

    if (hamburgerMenu.classList.contains('active')) {
      document.addEventListener('click', handleOutsideClickForSidebar);
    } else {
      document.removeEventListener('click', handleOutsideClickForSidebar);
    }
  }

  function handleOutsideClickForSidebar(event) {
    const sidebar = document.querySelector('.ul-nav-hbm');
    const hamburgerMenu = document.querySelector('.nav-hamburger-menu');
    const menuButton = document.querySelector('.nav-hamburger-menu button');

    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      if (hamburgerMenu.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
        document.removeEventListener('click', handleOutsideClickForSidebar);
      }
    }
  }


// ------------------------------------------------------------------------------------------------------
// Coursel JAVA_SCRIPT

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

// ------------------------------------------------------------------------------------------------------
// Product Slider JAVA_SCRIPT
// JavaScript for Product Slider

let productSlideIndex = 0;
showProductSlides();

function showProductSlides() {
    let i;
    let slides = document.getElementsByClassName("product-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    productSlideIndex++;
    if (productSlideIndex > slides.length) {
        productSlideIndex = 1;
    }
    slides[productSlideIndex - 1].style.display = "inline-block";
    setTimeout(showProductSlides, 2000); // Change slide every 2 seconds
}

// Product Slider JavaScript
let slideIndex1 = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.product-slide');
    if (n >= slides.length) {
        slideIndex1 = 0;
    }
    if (n < 0) {
        slideIndex1 = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex1) ? 'block' : 'none';
    });
}

function plusSlides(n) {
    showSlides(slideIndex1 += n);
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex1);
});
