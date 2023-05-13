const menuToggle = document.querySelector('.menuToggle');
const navSidebar = document.querySelector('.nav');

menuToggle.onclick = (e) => {
  navSidebar.classList.toggle('close');
};

// Searching input
const menuSearch = document.querySelector('.inputs');
const searching = (document.querySelector('.menu-icons .searching').onclick = (e) => {
  menuSearch.classList.toggle('active');
  e.preventDefault();
});
