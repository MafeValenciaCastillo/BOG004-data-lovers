import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/lol/lol.js';

const datos = data.data;
let arrayDatos = Object.values(datos); // Data convertida a array (object.values)--- object.key

/*let arrayAssassin = arrayDatos.filter(dat => {
    if (dat == Assassin)
    return 
})*/


console.log(arrayDatos);

// Cambio de paginas - boton campeones
document.getElementById("campeonesbtn").addEventListener("click", hidePages)

function hidePages(){
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'block';
 }
