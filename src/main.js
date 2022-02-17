
import data from './data/lol/lol.js';
import { rolLuchador, rolMagos, rolAsesinos, rolTanques, rolSoporte } from './data.js';
const arrayDatos = Object.values(data.data);
//console.log(arrayDatos);

console.log(rolLuchador(arrayDatos));
console.log(rolMagos(arrayDatos));
console.log(rolAsesinos(arrayDatos));
console.log(rolTanques(arrayDatos));
console.log(rolSoporte(arrayDatos));

//Para pintar podemos usar:literaltemplates

const informacionCampeon = document.getElementById("contenedorRoles");

const mostrarEnpantalla = (campeones) =>{
    informacionCampeon.innerHTML = "";
    campeones.forEach((campeon) => {
    const imagen = campeon.img;
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "propiedadesRoles")
    tarjeta.innerHTML = 
    `
    <img class = "image" src = ${imagen}>
    <h3>${campeon.name}</h3>
    <h4>${campeon.title}</h4>

    `
    informacionCampeon.appendChild(tarjeta);

}) 
}



// Cambio de paginas - boton campeones
document.getElementById("carrilesbtn").addEventListener("click", hidePages)

function hidePages(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('carriles').style.display = 'block';
 }

//Boton Carril Superio
document.getElementById("superiorBtn").addEventListener("click", lolSuperior)

function lolSuperior(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Superior";

        //Creacion del boton luchador
    const botonLuchador = document.getElementById("contenedorBotones");
    let btnLuchador = document.createElement("button");
    btnLuchador.textContent = "Luchadores";
    botonLuchador.appendChild(btnLuchador);

    btnLuchador.addEventListener("click", ocultar() );

    function ocultar() {
        document.getElementById("")
        mostrarEnpantalla(rolLuchador(arrayDatos))
    }


        //Creacion del boton Tanques
    const botonTanques = document.getElementById("contenedorBotones");
    let btnTanques = document.createElement("button");
    btnTanques.textContent = "Tanques";
    botonTanques.appendChild(btnTanques);

    btnTanques.addEventListener("click", mostrarEnpantalla(rolTanques(arrayDatos)))


    //mostrarEnpantalla(rolLuchador(arrayDatos));
    //mostrarEnpantalla(rolTanques(arrayDatos));
}

// Boton Carril Jungla
document.getElementById("junglaBtn").addEventListener("click", lolJungla)

function lolJungla(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Jungla";

    mostrarEnpantalla(rolLuchador(arrayDatos));
}

// Boton Carril Central
document.getElementById("centralBtn").addEventListener("click", lolCentral)

function lolCentral(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Central";

    mostrarEnpantalla(rolMagos(arrayDatos));
    mostrarEnpantalla(rolAsesinos(arrayDatos));
}
