const navLinks = document.querySelector(".navlinks");
const hamburgerHeader = document.querySelector(".hamburger-header");
const showHamburger = document.querySelector(".show-hamburger");
const hideHamburger = document.querySelector(".hide-hamburger");

showHamburger.addEventListener("click", () => {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    hideHamburger.style.display = "block";
    showHamburger.style.display = "none";
  } else {
    navLinks.style.display = "block";
    hideHamburger.style.display = "block";
    showHamburger.style.display = "none";
  }
});

hideHamburger.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    hideHamburger.style.display = "none";
    showHamburger.style.display = "block";
  }
});

// grab the html content
const reviewHeader = document.querySelector(".review-box-header");

// map through the elements
const displayReviewHeader = clientReview
  .map(
    (review) =>
      `
      <div class="review-box">
          <i class="fa-solid fa-quote-left"></i>
          <p>${review.text}</p>

          <div class="review-box-image">
            <div>
              <img src="${review.src}" alt="" />
            </div>
            <p>${review.name}</p>
            <p>${review.title}</p>
          </div>
      </div>
    `
  )
  .join("");

// set the innerHTML to display the content
reviewHeader.innerHTML = displayReviewHeader;
