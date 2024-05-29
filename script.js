// Toggle class active untuk hamburger menu
const NavbarNav= document.querySelector('.navbar-nav');
//Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    NavbarNav.classList.toggle('active');
};

//Toggle class active untuk search form
const searchForm = dpcument.querySelector('.search-form');
const searchBox= dpcument.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.google('active');
    searchBox.focus(); 
};
