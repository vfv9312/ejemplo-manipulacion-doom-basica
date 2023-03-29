const menuEmail = document.querySelector('.navbar-email');
const escritoriokenu = document.querySelector('.desktop-menu');
const movilmenu = document.querySelector('.mobile-menu');
const menuicono = document.querySelector('.menu11')

menuicono.addEventListener('click', togglemovilmenu);
menuEmail.addEventListener('click', mostrarmenu);


function mostrarmenu() {
    escritoriokenu.classList.toggle('inactivo');// quita o pone lo que coloquemos
}

function togglemovilmenu() {
    movilmenu.classList.toggle('inactivo')
}