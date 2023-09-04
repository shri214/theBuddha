const index1 = document.querySelector(".index1");
const index2 = document.querySelector(".index2");
const sc1Elements = document.querySelectorAll(".sc1");
const sc2Elements = document.querySelectorAll(".sc2");
const navbar = document.querySelector(".navbar");

let isIndex1Visible = true;

setInterval(() => {
  if (isIndex1Visible) {
    index2.style.display = "none";
    index1.style.display = "flex";
    sc1Elements.forEach((element) => {
      element.style.transform = "translateY(0px)";
    });
    sc2Elements.forEach((element) => {
      element.style.transform = "translateY(-40px)";
    });
  } else {
    index1.style.display = "none";
    index2.style.display = "flex";
    sc1Elements.forEach((element) => {
      element.style.transform = "translateY(-40)";
    });
    sc2Elements.forEach((element) => {
      element.style.transform = "translateY(0px)";
    });
  }
  const elementsToAnimate = document.querySelectorAll(
    ".title, .para, .show, .images, .texts h6"
  );

  elementsToAnimate.forEach((element) => {
    element.style.animation = "moveUp 2s ease forwards";
  });

  // Define the moveUp animation
  const styleSheet = document.styleSheets[0]; // Get the first stylesheet
  const keyframes = `@keyframes moveUp {
from {
  transform: translateY(15px);
  opacity:0;
}
to {
  transform: translateY(0px);
  opacity:1
}
}`;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  isIndex1Visible = !isIndex1Visible;
}, 4000);

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 40) {
    navbar.style.backgroundColor = "white";
    navbar.style.padding = "15px 40px";
    document.querySelector(".back-to-top").style.display = "flex";
    console.log("Scroll height is more than 40px down.");
  } else {
    navbar.style.backgroundColor = "unset";
    navbar.style.padding = "30px 40px";

    document.querySelector(".back-to-top").style.display = "none";
    console.log("Scroll height is less than 40px down.");
  }
});

document.querySelector(".show").addEventListener("click", () => {
  console.log("show is press but hovering not work");
});

//   // ////////////////////////////////////////////////////////////////////////
const slider = document.querySelector(".Carousel ul");
const slides = document.querySelectorAll(".car-list");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");

const slideCount = slides.length;
const slideWidth = slides[0].offsetWidth;
const slidesToDisplay = 4;
// const slidesToShow = 5;
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slideCount - 4) {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount - 1;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * (slideWidth + 25)}px)`;
}

setInterval(nextSlide, 3000);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// /////////////////////////////////////////////

const slider2 = document.querySelector(".Carousel2 ul");
const slides2 = document.querySelectorAll(".car-list2");
const nextButton2 = document.querySelector("#nextButton2");
const prevButton2 = document.querySelector("#prevButton2");

const slideCount2 = slides2.length;
const slideWidth2 = slides2[0].offsetWidth;
const slidesToDisplay2 = 4;
const slidesToShow2 = 5;
let currentIndex2 = 0;

function nextSlide2() {
  currentIndex2++;
  if (currentIndex2 >= slideCount2 - 4) {
    currentIndex2 = 0;
  }
  updateSlider2();
}

function prevSlide2() {
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = slideCount2 - 1;
  }
  updateSlider2();
}

function updateSlider2() {
  slider2.style.transform = `translateX(-${
    currentIndex2 * (slideWidth2 + 25)
  }px)`;
}

setInterval(nextSlide2, 3000);

nextButton2.addEventListener("click", nextSlide2);
prevButton2.addEventListener("click", prevSlide2);

// //////////////////////////////////////////
const slider3 = document.querySelector(".cl3 ul");
const slides3 = document.querySelectorAll(".car-list3");
const nextButton3 = document.querySelector("#nextButton3");
const prevButton3 = document.querySelector("#prevButton3");

const slideCount3 = slides3.length;
const slideWidth3 = slides3[0].offsetWidth;
const slidesToDisplay3 = 3;
// const slidesToShow3 = 3;
let currentIndex3 = 0;

function nextSlide3() {
  currentIndex3++;
  if (currentIndex3 >= slideCount3 - 3) {
    currentIndex3 = 0;
  }
  updateSlider3();
}

function prevSlide3() {
  currentIndex3--;
  console.log(currentIndex3);
  if (currentIndex3 < 0) {
    currentIndex3 = slideCount3 - 1;
  }
  updateSlider3();
}

function updateSlider3() {
  slider3.style.transform = `translateX(-${
    currentIndex3 * (slideWidth3 + 25)
  }px)`;
}

nextButton3.addEventListener("click", nextSlide3);
prevButton3.addEventListener("click", prevSlide3);

// ///////////////////////////////////////////

// script.js
const animatedComponent = document.querySelector(".two-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animatedComponent.style.animationPlayState = "running";
      } else {
        animatedComponent.style.animationPlayState = "paused";
      }
    });
  },
  {
    threshold: 0.5, // Adjust this threshold as needed
  }
);

observer.observe(animatedComponent);

// ///////////////////////

const close = document.getElementById("close");
const modal = document.querySelector(".bg-trans");
const menu = document.querySelector(".menu");
const container = document.querySelector(".modal");

close.addEventListener("click", () => {
  modal.style.display = "none";
});
menu.addEventListener("click", (e) => {
  modal.style.display = "flex";
  e.stopPropagation();
});
container.addEventListener("click", (e) => {
  console.log("click event trigger on modal");
  e.stopPropagation();
});

window.addEventListener("click", () => {
  modal.style.display = "none";
});

// ///////////////

// Get a reference to the button element
const scrollToTopButton = document.querySelector(".back-to-top");

// Add a click event listener to the button
scrollToTopButton.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth scrolling behavior for a smooth transition
  });
});

// ////////////////////////////////

const toggleList = Array.from(document.querySelectorAll(".toggle"));

const closeAllExcept = (target) => {
  toggleList.forEach((element) => {
    if (element !== target) {
      const icons = element.querySelector(".toggle-icons");
      const nestedDrop = element.querySelector(".nested-drop");
      icons.textContent = "expand_more";
      nestedDrop.style.display = "none";
    }
  });
};

toggleList.forEach((element) => {
  element.addEventListener("click", () => {
    const icons = element.querySelector(".toggle-icons");
    const nestedDrop = element.querySelector(".nested-drop");
    if (icons.textContent === "expand_more") {
      icons.textContent = "expand_less";
      nestedDrop.style.display = "block";
      closeAllExcept(element);
    } else {
      icons.textContent = "expand_more";
      nestedDrop.style.display = "none";
    }
  });
});

// ////////////////////////////////

const menuList = document.querySelector(".menu-list");
const menuList1 = document.querySelector(".menuList");
const Sidebar = document.querySelector(".Sidebar");
menuList.addEventListener("click", () => {
  if (Sidebar.style.display === "none") {
    menuList1.textContent='X'
    Sidebar.style.display = "flex";
  } else {
    menuList1.textContent='list'
    Sidebar.style.display = "none";
  }
});


Sidebar.addEventListener("click", (e) => {
  console.log("click event trigger on modal");
  e.stopPropagation();
});