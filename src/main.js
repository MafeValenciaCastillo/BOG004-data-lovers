
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
document.getElementById("campeonesbtn").addEventListener("click", hidePages)

function hidePages(){
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'block';
 }
document.getElementById("junglabtn").addEventListener("click", lolJungla)

function lolJungla(){
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("paginaJungla").style.display = "block";
    mostrarEnpantalla(arrayDatos)
}