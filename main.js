const menuEmail = document.querySelector('.navbar-email');
const escritoriokenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', mostrarmenu);

function mostrarmenu() {
    escritoriokenu.classList.toggle('inactivo');// quita o pone lo que coloquemos
}