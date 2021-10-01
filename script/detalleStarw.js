let h1= document.querySelector("h1");
let imagen=document.querySelector("img");
let boton=document.querySelector(".btn-dark");
let h6= document.querySelector("p");


const getLocalStorage=()=>{//obtener del localStorage
    let detalle1= JSON.parse(localStorage.getItem('detalle'));
    console.log(detalle1);
    const {name,image,descripcion} =detalle1;
    h1.textContent = name;
    h6.textContent=descripcion;
    imagen.setAttribute('src',image);
    
}

document.addEventListener('DOMContentLoaded',getLocalStorage);

boton.addEventListener('click',()=>{
    window.location.href = 'StarWards.html';
})