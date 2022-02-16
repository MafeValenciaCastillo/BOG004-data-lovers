
import data from './data/lol/lol.js';

const datos = data.data;

var arrayDatos = Object.values(datos); // Data convertida a array (object.values)--- object.key
//Método Filter solo aplica para arreglos 
let arrayFighter = arrayDatos.filter(dato => dato.tags.includes("Fighter")); //función includes nos sirve para preguntar si dentro de los valores que tiene la propiedad "tags" existe en este caso "Fighter"
let arrayMagos = arrayDatos.filter(dato => dato.tags.includes("Mage"));


//console.log("campeones filtrados:");
console.log(arrayFighter);
console.log(arrayMagos);



/*
campeonesFiltrados(tag){
    let campeones = arrayDatos.filter(dato => dato.tags.includes(tag));
    return campeones;
}*/

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
}