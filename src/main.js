import data from './data/lol/lol.js';
import { ordenarPorAtaque, rolFiltro, staticsMovespeed, staticsAttackRange, staticsAttackDamage } from './data.js';
const arrayDatos = Object.values(data.data);

const copyArrayDatos = [...arrayDatos];

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
    <h3>${campeon.name}</h3>
    <h4>${campeon.title}</h4> 
    <h4>${"Nivel de Ataque: " + campeon.info.attack}</h4> `
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
    const ataqueOrdenado = ordenarPorAtaque(rolFiltro(filtro));
    mostrarEnpantalla(ataqueOrdenado)
});

//Boton Carril Superior
document.getElementById("superiorBtn").addEventListener("click", lolSuperior);

function lolSuperior(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Superior";
    document.getElementById("tituloPorRoles").innerHTML = "Luchadores y Tanques";

    mostrarEnpantalla(rolFiltro("Fighter") , rolFiltro("Tank"));
    
     //Creacion del boton luchador
     const contenedorBotonLuchador = document.getElementById("contenedorBotones");
     let btnLuchador = document.createElement("button");
     btnLuchador.textContent = "Luchadores";
     contenedorBotonLuchador.appendChild(btnLuchador);
     
     btnLuchador.addEventListener("click", mostrarLuchadores);

     function mostrarLuchadores() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Luchadores";
        mostrarEnpantalla(rolFiltro("Fighter"));
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
        mostrarEnpantalla(rolFiltro("Tank"));
    }
   
}

// Boton Carril Jungla
document.getElementById("junglaBtn").addEventListener("click", lolJungla)

function lolJungla(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Jungla";

    mostrarEnpantalla(rolFiltro("Fighter"));

    const botonLuchador = document.getElementById("contenedorBotones");
    let btnLuchador = document.createElement("button");
    btnLuchador.textContent = "Luchadores";
    botonLuchador.appendChild(btnLuchador);

    btnLuchador.addEventListener("click", mostrarLuchadores);
    function mostrarLuchadores() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Luchadores";
        mostrarEnpantalla(rolFiltro("Fighter"));
    }
}

// Boton Carril Central
document.getElementById("centralBtn").addEventListener("click", lolCentral)

function lolCentral(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Central";

    mostrarEnpantalla(rolFiltro("Assassin") , rolFiltro("Mage"));


    //Creacion del boton Asesinos
    const botonAsesinos = document.getElementById("contenedorBotones");
    let btnAsesino = document.createElement("button");
    btnAsesino.textContent = "Asesinos";
    botonAsesinos.appendChild(btnAsesino);

    btnAsesino.addEventListener("click", mostrarAsesinos);
    function mostrarAsesinos() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Asesinos";
        mostrarEnpantalla(rolFiltro("Assassin"));
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
        mostrarEnpantalla(rolFiltro("Mage"));    }
    }

// Boton Carril Inferior
document.getElementById("inferiorBtn").addEventListener("click", lolInferior)

function lolInferior(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Inferior";

    mostrarEnpantalla(rolFiltro("Marksman") , rolFiltro("Support"));

    //Creacion del boton Tiradores
    const botonTiradores = document.getElementById("contenedorBotones");
    let btTiradores = document.createElement("button");
    btTiradores.textContent = "Tiradores";
    botonTiradores.appendChild(btTiradores);

    btTiradores.addEventListener("click", mostrarTiradores);
    function mostrarTiradores() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Tiradores";
        mostrarEnpantalla(rolFiltro("Marksman")); 
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
        mostrarEnpantalla(rolFiltro("Support")); 
    }
}


// Boton Carril Soporte
document.getElementById("soporteBtn").addEventListener("click", lolSoporte)

function lolSoporte(){
    document.getElementById("carriles").style.display = "none";
    document.getElementById("salonCampeones").style.display = "block";
    document.getElementById("campeones").style.display = "block";

    document.getElementById("titulo").innerHTML = "Estos son los mejores campeones para el carril Soporte";

    mostrarEnpantalla(rolFiltro("Support") , rolFiltro("Tank"));

    //Creacion del Soporte
    const botonSoporte = document.getElementById("contenedorBotones");
    let btnSoporte = document.createElement("button");
    btnSoporte.textContent = "Soporte";
    botonSoporte.appendChild(btnSoporte);

    btnSoporte.addEventListener("click", mostrarSoporte);
    function mostrarSoporte() {
        informacionCampeon.innerHTML = "";
        document.getElementById("tituloPorRoles").innerHTML = "Soporte";
        mostrarEnpantalla(rolFiltro("Support")); 
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
        mostrarEnpantalla(rolFiltro("Tank"))
    }
}
