import { data } from "../data/data1.js";
const templateCard=document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const div=document.getElementById("items");//crea una variable llamda div y le asigna el id items
const regresar=document.getElementById("regresar1");
//console.log(data);

const cargarData = (data)=> {

    data.forEach((personaje)=>{
        //console.log(personaje);
        const {id,name,image,precio}= personaje;
        //const id2=personaje.id;
        templateCard.querySelector('h5').textContent=name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id=id;//me le asigna un id al boton que esta creando la tarjeta deacuerdo a las id del data.
        templateCard.querySelector('h3').textContent=precio;
        const clone=templateCard.cloneNode(true);
        fragment.appendChild(clone);

    })

    div.appendChild(fragment);

}
document.addEventListener('DOMContentLoaded', cargarData(data));

// evento para el btn de las tarjetas
items.addEventListener('click', (e) =>{//items es el id de la division que contiene todas las tarejetas
    //console.log(e.target.classList.contains('btn-dark'));//retorna un true o un false si el elemento contiene esa clase
    if(e.target.classList.contains('btn-dark')){
        //console.log(e.target.dataset.id);me devuelve el id de la tarjeta solo si hago click en el botone.target.dataset.id
        let findId = e.target.dataset.id;
        let personaje = data.find(personaxe => personaxe.id==findId)  //esta comparando los id para poder comparar los id de data y id del boton
        //console.log(personaje);//JSON.stringify convierte un objeto como estructura Json{}
        localStorage.setItem("detalle",JSON.stringify (personaje));
        window.location.href = 'desStarw.html';

    }


})

regresar.addEventListener('click', (e) =>{//items es el id de la division que contiene todas las tarejetas
      
    window.location.href = 'principal.html';
})