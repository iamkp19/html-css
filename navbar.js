const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const navlinks = document.getElementsByClassName("navlinks")[0];

togglebtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })
