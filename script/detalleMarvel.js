let h1= document.querySelector("h1");
let imagen=document.querySelector("img");
let boton=document.querySelector(".regreso1");
let botoncompra=document.querySelector(".comprar");
let h6= document.querySelector("p");
let precio1=document.querySelector("h2");



let carrito=[];

const getLocalStorage=()=>{//obtener del localStorage
    let detalle1= JSON.parse(localStorage.getItem('detalle'));
    console.log(detalle1);
    const {name,image,descripcion,precio} =detalle1;
    h1.textContent = name;
    h6.textContent=descripcion;
    imagen.setAttribute('src',image);
    precio1.textContent=precio;
    
}

document.addEventListener('DOMContentLoaded',getLocalStorage);

boton.addEventListener('click',()=>{
    window.location.href = 'marvel.html';
})


botoncompra.addEventListener('click',()=>{
    console.log("estoy capturando")
    let producto= JSON.parse(localStorage.getItem('detalle'));
    console.log(producto);
    const {id,name,image,precio} =producto;
    let idProducto= producto.id;
    let nameProducto=producto.name;
    let imageProducto=producto.image;
    let precioProducto=producto.precio;
    let compra={
        "id":idProducto,
        "nombre":nameProducto,
        "imagen":imageProducto,
        "precio":precioProducto
    }
    
 carrito.push(compra);
 console.log(carrito);
});



