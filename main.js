const menuEmail = document.querySelector('.navbar-email');
const subMenuNavbar = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', showSubMenu);

function showSubMenu(){
    subMenuNavbar.classList.toggle('inactive')
}