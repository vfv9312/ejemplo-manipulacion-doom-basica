const menuEmail = document.querySelector('.navbar-email');
const escritoriokenu = document.querySelector('.desktop-menu');
const movilmenu = document.querySelector('.mobile-menu');
const menuicono = document.querySelector('.menu11');
const compras = document.querySelector('.product-detail');
const iconocompras = document.querySelector('.navbar-shopping-cart');


menuicono.addEventListener('click', togglemovilmenu);
menuEmail.addEventListener('click', mostrarmenu);
iconocompras.addEventListener('click', mostrarcarrito);



function mostrarmenu() {
    escritoriokenu.classList.toggle('inactivo');// quita o pone lo que coloquemos
}

function togglemovilmenu() {
    const isAsideClosed = compras.classList.contains('inactivo'); //agarra el valor inactivo, si esta inactivo la pestaña de compras
  
    if (!isAsideClosed) { //si esta activo la pestaña de compras entra esta condicion
        compras.classList.add('inactivo');  //desactivo la pestaña de compras
        //como no hay retun continua leyendo la funcion
    }
    
    movilmenu.classList.toggle('inactivo'); // activa la pestaña movil
}

function mostrarcarrito() {
    const isMobileMenuClosed = movilmenu.classList.contains('inactivo'); //agarra el valor inactivo, si esta inactivo la pestaña de movil

    if (!isMobileMenuClosed) {//si esta activo la pestaña de menu entra esta condicion
        movilmenu.classList.add('inactivo'); //desactivo la pestaña de menu
      }

    compras.classList.toggle('inactivo')// activa la pestaña movil
    
}

