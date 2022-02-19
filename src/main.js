
import data from './data/lol/lol.js';
import { rolLuchador, rolMagos, rolAsesinos, rolTanques, rolSoporte, rolTiradores, ordenarPorAtaque } from './data.js';
const arrayDatos = Object.values(data.data);

//Para pintar podemos usar:literaltemplates

console.log(ordenarPorAtaque(arrayDatos));

const informacionCampeon = document.getElementById("contenedorRoles");
const mostrarEnpantalla = (campeones) =>{
    informacionCampeon.innerHTML = "";
    campeones.forEach((campeon) => {
    const imagen = campeon.img;
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "propiedadesRoles")
    tarjeta.innerHTML = ` <img class = "image" src = ${imagen}>
    <h3>${campeon.name}</h3>
    <h4>${campeon.title}</h4> 
    <h4>${"Nivel de Ataque: " + campeon.info.attack}</h4>
    `

    informacionCampeon.appendChild(tarjeta);
}) 
}

const informacionCampeonSeleccionado = document.getElementById("seleccionCampeones");
const mostrarEnpantallaSeleccionados = (campeones) =>{
    informacionCampeonSeleccionado.innerHTML = "";
    campeones.forEach((campeon) => {
    let imagen = campeon.img;
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "contenedorSeleccionCampeones")
    tarjeta.innerHTML = `<img class = "image" src = ${imagen}>
    <h3>${campeon.name}</h3>
    <h4>${campeon.title}</h4> 
    <h4>${"Nivel de Ataque: " + campeon.info.attack}</h4>`
    informacionCampeonSeleccionado.appendChild(tarjeta);
}) 
}



// Cambio de paginas - boton campeones
document.getElementById("carrilesbtn").addEventListener("click", hidePages)

function hidePages(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('carriles').style.display = 'block';
 }

//Boton Carril Superior
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
 
     btnLuchador.addEventListener("click", ocultar);
     function ocultar() {
        /* //boton
        const botonOrganizar = document.getElementById("contenedorBotones");
        let btnOrganizar = document.createElement("button");
        btnOrganizar.textContent = "Organizar";
        botonOrganizar.appendChild(btnOrganizar);

        btnOrganizar.addEventListener("click", ordenarAtaque);

        function ordenarAtaque() {
            rolLuchador(ordenarPorAtaque(arrayDatos));
            console.log(rolLuchador(arrayDatos))
            
        }*/

         mostrarEnpantallaSeleccionados(rolLuchador(arrayDatos));
     }
 
     //Creacion del boton Tanques
     const botonTanques = document.getElementById("contenedorBotones");
     let btnTanques = document.createElement("button");
     btnTanques.textContent = "Tanques";
     botonTanques.appendChild(btnTanques);
 
     btnTanques.addEventListener("click", ocultarT);
     function ocultarT() {
         mostrarEnpantallaSeleccionados(rolTanques(arrayDatos));
     }

    //mostrarEnpantalla(rolLuchador(arrayDatos));
    //mostrarEnpantalla(rolTanques(arrayDatos));

    //console.log((rolLuchador(arrayDatos)));
    //console.log(rolTanques(arrayDatos));

   
}

// Boton Carril Jungla
document.getElementById("junglaBtn").addEventListener("click", lolJungla)

function lolJungla(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Jungla";

    const botonLuchador = document.getElementById("contenedorBotones");
    let btnLuchador = document.createElement("button");
    btnLuchador.textContent = "Luchadores";
    botonLuchador.appendChild(btnLuchador);

    btnLuchador.addEventListener("click", ocultar);
    function ocultar() {
        mostrarEnpantallaSeleccionados(rolLuchador(arrayDatos));
    }
}

// Boton Carril Central
document.getElementById("centralBtn").addEventListener("click", lolCentral)

function lolCentral(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Central";

    //Creacion del boton Asesinos
    const botonAsesinos = document.getElementById("contenedorBotones");
    let btnAsesino = document.createElement("button");
    btnAsesino.textContent = "Asesinos";
    botonAsesinos.appendChild(btnAsesino);

    btnAsesino.addEventListener("click", ocultar);
    function ocultar() {
        mostrarEnpantallaSeleccionados(rolAsesinos(arrayDatos));
    }

    //Creacion del Magos
    const botonMagos = document.getElementById("contenedorBotones");
    let btnMagos = document.createElement("button");
    btnMagos.textContent = "Magos";
    botonMagos.appendChild(btnMagos);

    btnMagos.addEventListener("click", ocultarT);
    function ocultarT() {
        mostrarEnpantallaSeleccionados(rolMagos(arrayDatos));
    }

    //mostrarEnpantalla(rolMagos(arrayDatos));
    //mostrarEnpantalla(rolAsesinos(arrayDatos));
}

// Boton Carril Inferior
document.getElementById("inferiorBtn").addEventListener("click", lolInferior)

function lolInferior(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Inferior";

    //Creacion del boton Tiradores
    const botonTiradores = document.getElementById("contenedorBotones");
    let btTiradores = document.createElement("button");
    btTiradores.textContent = "Tiradores";
    botonTiradores.appendChild(btTiradores);

    btTiradores.addEventListener("click", ocultar);
    function ocultar() {
        mostrarEnpantallaSeleccionados(rolTiradores(arrayDatos));
    }

    //Creacion del Soporte
    const botonSoporte = document.getElementById("contenedorBotones");
    let btnSoporte = document.createElement("button");
    btnSoporte.textContent = "Soporte";
    botonSoporte.appendChild(btnSoporte);

    btnSoporte.addEventListener("click", ocultarT);
    function ocultarT() {
        mostrarEnpantallaSeleccionados(rolSoporte(arrayDatos));
    }

    //mostrarEnpantalla(rolMagos(arrayDatos));
    //mostrarEnpantalla(rolAsesinos(arrayDatos));
}


// Boton Carril Soporte
document.getElementById("soporteBtn").addEventListener("click", lolSoporte)

function lolSoporte(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Soporte";

    //Creacion del Soporte
    const botonSoporte = document.getElementById("contenedorBotones");
    let btnSoporte = document.createElement("button");
    btnSoporte.textContent = "Soporte";
    botonSoporte.appendChild(btnSoporte);

    btnSoporte.addEventListener("click", ocultar);
    function ocultar() {
        mostrarEnpantallaSeleccionados(rolSoporte(arrayDatos));
    }

    //Creacion del boton Tanques
    const botonTanques = document.getElementById("contenedorBotones");
    let btnTanques = document.createElement("button");
    btnTanques.textContent = "Tanques";
    botonTanques.appendChild(btnTanques);

    btnTanques.addEventListener("click", ocultarT);
    function ocultarT() {
        mostrarEnpantallaSeleccionados(rolTanques(arrayDatos));
    }



    //mostrarEnpantalla(rolMagos(arrayDatos));
    //mostrarEnpantalla(rolAsesinos(arrayDatos));
}
