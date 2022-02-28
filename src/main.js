
import data from './data/lol/lol.js';
import { ordenarPorAtaque, rolFiltro, staticsMovespeed, staticsAttackRange, staticsAttackDamage } from './data.js';
const arrayDatos = Object.values(data.data);
const copyArrayDatos = [...arrayDatos];
(copyArrayDatos);
staticsMovespeed(arrayDatos);
staticsAttackRange(arrayDatos);
staticsAttackDamage(arrayDatos);

//Para pintar podemos usar:literaltemplates

const informacionCampeon = document.getElementById("contenedorRoles");
const mostrarEnpantalla = (campeones) => {
    informacionCampeon.innerHTML = "";
    campeones.forEach((campeon) => {
    const imagen = campeon.splash;
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "propiedadesRoles")
    tarjeta.innerHTML = ` <img class = "image" src = ${imagen}>
    <h2>${campeon.name}</h2>
    <h3>${campeon.title}</h3> 
    <h3>${"Nivel de ataque: " + campeon.info.attack}</h3>
    <h3>${"Defensa: " + campeon.info.defense}</h3>
    <h3>${"Magia: " + campeon.info.magic}</h3>
    <h3>${"Dificultad: " + campeon.info.difficulty}</h3>
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

document.getElementById("estadisticasbtn").addEventListener("click", hidePagesEstadisticas)

function hidePagesEstadisticas(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('estadisticasLol').style.display = 'block';
}

document.getElementById("speed").innerHTML = "El promedio de rapidez de los campeones es de: " + staticsMovespeed(arrayDatos) + ".";
document.getElementById("damage").innerHTML = "El promedio de Daño de los campeones es de: " + staticsAttackDamage(arrayDatos) + ".";
document.getElementById("rango").innerHTML = "El promedio de Rango de ataque de los campeones es de: " + staticsAttackRange(arrayDatos) + ".";

document.getElementById("organizar").addEventListener("click", () => {
    let filtro = document.getElementById("tituloPorRoles").textContent;
    if (filtro == "Luchadores"){
        filtro = "Fighter"
    } else if (filtro == "Tanques"){
        filtro = "Tank"
    } else if (filtro == "Asesinos"){
        filtro = "Assassin"
    }else if (filtro == "Magos"){
        filtro = "Mage"
    }else if (filtro == "Tiradores"){
        filtro = "Marksman"
    }else if (filtro == "Soporte"){
        filtro = "Support"
    }
    const ataqueOrdenado = ordenarPorAtaque(rolFiltro(arrayDatos, filtro));
    mostrarEnpantalla(ataqueOrdenado)
});

document.getElementById("atrasBtn").addEventListener("click", regresar);

function regresar (){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("home").style.display = "block";   
}


//Boton Carril Superior
document.getElementById("superiorBtn").addEventListener("click", lolSuperior);

function lolSuperior(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Superior";
    document.getElementById("tituloPorRoles").innerHTML = "Luchadores y Tanques";

    mostrarEnpantalla(rolFiltro(arrayDatos, "Fighter") , rolFiltro(arrayDatos, "Tank"));
    
     //Creacion del boton luchador
     const contenedorBotonLuchador = document.getElementById("contenedorBotones");
     let btnLuchador = document.createElement("button");
     btnLuchador.textContent = "Luchadores";
     contenedorBotonLuchador.appendChild(btnLuchador);
     btnLuchador.addEventListener("click", mostrarLuchadores);

     function mostrarLuchadores() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Luchadores";
        document.getElementById("contenedorBotonOrganizarAtaque").style.display = "block";//NUEVO BOTON ORGANIZAR
        mostrarEnpantalla(rolFiltro(arrayDatos,"Fighter"));
    }
        
    //Creacion del boton Tanques
    const contenedorBotonTanque = document.getElementById("contenedorBotones");
    let btnTanques = document.createElement("button");
    btnTanques.textContent = "Tanques";
    contenedorBotonTanque.appendChild(btnTanques);
 
    btnTanques.addEventListener("click", mostrarTanques);
    function mostrarTanques() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Tanques";
        mostrarEnpantalla(rolFiltro(arrayDatos, "Tank"));
    }
   
}

// Boton Carril Jungla
document.getElementById("junglaBtn").addEventListener("click", lolJungla)

function lolJungla(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Jungla";

    mostrarEnpantalla(rolFiltro(arrayDatos, "Fighter"));

    const botonLuchador = document.getElementById("contenedorBotones");
    let btnLuchador = document.createElement("button");
    btnLuchador.textContent = "Luchadores";
    botonLuchador.appendChild(btnLuchador);

    btnLuchador.addEventListener("click", mostrarLuchadores);
    function mostrarLuchadores() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Luchadores";
        document.getElementById("contenedorBotonOrganizarAtaque").style.display = "block";//NUEVO BOTON ORGANIZAR
        mostrarEnpantalla(rolFiltro(arrayDatos, "Fighter"));
    }
}

// Boton Carril Central
document.getElementById("centralBtn").addEventListener("click", lolCentral)

function lolCentral(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Central";

    mostrarEnpantalla(rolFiltro(arrayDatos, "Assassin") , rolFiltro(arrayDatos, "Mage"));


    //Creacion del boton Asesinos
    const botonAsesinos = document.getElementById("contenedorBotones");
    let btnAsesino = document.createElement("button");
    btnAsesino.textContent = "Asesinos";
    botonAsesinos.appendChild(btnAsesino);

    btnAsesino.addEventListener("click", mostrarAsesinos);
    function mostrarAsesinos() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Asesinos";
        document.getElementById("contenedorBotonOrganizarAtaque").style.display = "block";//NUEVO BOTON ORGANIZAR
        mostrarEnpantalla(rolFiltro(arrayDatos, "Assassin"));
    }

    //Creacion del Magos
    const botonMagos = document.getElementById("contenedorBotones");
    let btnMagos = document.createElement("button");
    btnMagos.textContent = "Magos";
    botonMagos.appendChild(btnMagos);

    btnMagos.addEventListener("click", mostrarMagos);
    function mostrarMagos() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Magos";
        document.getElementById("contenedorBotonOrganizarAtaque").style.display = "block";//NUEVO BOTON ORGANIZAR
        mostrarEnpantalla(rolFiltro(arrayDatos, "Mage"));    }
    }

// Boton Carril Inferior
document.getElementById("inferiorBtn").addEventListener("click", lolInferior)

function lolInferior(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Inferior";

    mostrarEnpantalla(rolFiltro(arrayDatos, "Marksman") , rolFiltro(arrayDatos, "Support"));

    //Creacion del boton Tiradores
    const botonTiradores = document.getElementById("contenedorBotones");
    let btTiradores = document.createElement("button");
    btTiradores.textContent = "Tiradores";
    botonTiradores.appendChild(btTiradores);

    btTiradores.addEventListener("click", mostrarTiradores);
    function mostrarTiradores() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Tiradores";
        document.getElementById("contenedorBotonOrganizarAtaque").style.display = "block";//NUEVO BOTON ORGANIZAR
        mostrarEnpantalla(rolFiltro(arrayDatos, "Marksman")); 
    }

    //Creacion del Soporte
    const botonSoporte = document.getElementById("contenedorBotones");
    let btnSoporte = document.createElement("button");
    btnSoporte.textContent = "Soporte";
    botonSoporte.appendChild(btnSoporte);

    btnSoporte.addEventListener("click", ocultarT);
    function ocultarT() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Soporte";
        mostrarEnpantalla(rolFiltro(arrayDatos, "Support")); 
    }
}


// Boton Carril Soporte
document.getElementById("soporteBtn").addEventListener("click", lolSoporte)

function lolSoporte(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Soporte";

    mostrarEnpantalla(rolFiltro(arrayDatos, "Support") , rolFiltro(arrayDatos, "Tank"));

    //Creacion del Soporte
    const botonSoporte = document.getElementById("contenedorBotones");
    let btnSoporte = document.createElement("button");
    btnSoporte.textContent = "Soporte";
    botonSoporte.appendChild(btnSoporte);

    btnSoporte.addEventListener("click", mostrarSoporte);
    function mostrarSoporte() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Soporte";
        document.getElementById("contenedorBotonOrganizarAtaque").style.display = "block";//NUEVO BOTON ORGANIZAR
        mostrarEnpantalla(rolFiltro(arrayDatos, "Support")); 
    }

    //Creacion del boton Tanques
    const botonTanques = document.getElementById("contenedorBotones");
    let btnTanques = document.createElement("button");
    btnTanques.textContent = "Tanques";
    botonTanques.appendChild(btnTanques);

    btnTanques.addEventListener("click", mostrarTanques);
    function mostrarTanques() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Tanques";
        mostrarEnpantalla(rolFiltro(arrayDatos, "Tank"))
    }
}
