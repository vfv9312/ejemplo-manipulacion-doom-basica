const menuEmail = document.querySelector('.navbar-email');
const escritoriokenu = document.querySelector('.desktop-menu');
const movilmenu = document.querySelector('.mobile-menu');
const menuicono = document.querySelector('.menu11');
const compras = document.querySelector('.product-detail');
const iconocompras = document.querySelector('.navbar-shopping-cart');
const cardsContainer=document.querySelector('.cards-container');


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

const listaProductos = [];

listaProductos.push ({
    nombre: 'Motocicleta',
    precio: 40000,
    imagen: "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

listaProductos.push ({
    nombre: 'Bicicleta',
    precio: 4000,
    imagen: "https://bicimaya.com/wp-content/uploads/2021/05/A-scaled.jpg",
});

listaProductos.push ({
    nombre: 'Patineta',
    precio: 1000,
    imagen: "https://m.media-amazon.com/images/I/61yMreL1JqL._AC_SX425_.jpg",
});


function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.imagen);

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv=document.createElement('div');

        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.precio;
        const productName=document.createElement('p');
        productName.innerText=product.nombre;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);}}

renderProducts(listaProductos);

