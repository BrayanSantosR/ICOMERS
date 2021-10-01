const categoria1=document.getElementById("categoria1")
const categoria2=document.getElementById("categoria2")

categoria1.addEventListener('click', (e) =>{//items es el id de la division que contiene todas las tarejetas
      
        window.location.href = 'StarWards.html';
})

categoria2.addEventListener('click', (e) =>{//items es el id de la division que contiene todas las tarejetas
      
    window.location.href = 'marvel.html';
})

form.addEventListener("submit", function LocalStorage(){

    // captura de datos
    let inputName= document.getElementById("inputName").value;
    let inputApellido= document.getElementById("inputApellido").value;
    let inputTelefono= document.getElementById("inputTelefono").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let msm = document.getElementById("msm").value;

    //validacion de datos

    if(inputName==="" || email==="" || gender=== "" || msm ==="" || inputApellido==="" || inputTelefono===""){
        alert("ingresar todos los campos");
    }else{
        localStorage.setItem("Nombre", inputName);
        localStorage.setItem("Apellido",inputApellido);
        localStorage.setItem("Telefono",inputTelefono);
        localStorage.setItem("Email", email);
        localStorage.setItem("Genero", gender);
        localStorage.setItem("Mensaje", msm); 
        ObtenerLocalStorage()      
    }

}
)

// funcion obtener localStorage 
function ObtenerLocalStorage(){
    let nombre= localStorage.getItem("Nombre");
    let apellido= localStorage.getItem("Apellido");
    let telefono= localStorage.getItem("Telefono");
    let email= localStorage.getItem("Email");
    let genero= localStorage.getItem("Genero");
    let mensaje= localStorage.getItem("Mensaje");
    alert(`La informacion almacenada es: ${nombre}
    ${apellido}
    ${telefono}
    ${email}
    ${genero} 
    ${mensaje}`);
    
}