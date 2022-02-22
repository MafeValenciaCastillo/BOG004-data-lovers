// estas funciones son de ejemplo

import data from './data/lol/lol.js';
const arrayDatos = Object.values(data.data);

const copyArrayDatos = [...arrayDatos];

export const rolLuchador = (arrayDatos) => {
  let arrayFighter = arrayDatos.filter(dato => dato.tags.includes("Fighter"));
  return arrayFighter;
};

export const rolMagos = (arrayDatos) => {
  let arrayMagos = arrayDatos.filter(dato => dato.tags.includes("Mage"));
  return arrayMagos;
};

export const rolAsesinos = (arrayDatos) => {
  let arrayAsesinos = arrayDatos.filter(dato => dato.tags.includes("Assassin"));
  return arrayAsesinos;
};

export const rolTanques = (arrayDatos) => {
  let arrayTanques = arrayDatos.filter(dato => dato.tags.includes("Tank"));
  return arrayTanques;
};

export const rolSoporte = (arrayDatos) => {
  let arraySoporte = arrayDatos.filter(dato => dato.tags.includes("Support"));
  return arraySoporte;
};

export const rolTiradores = (arrayDatos) => {
  let arrayTiradores = arrayDatos.filter(dato => dato.tags.includes("Marksman"));
  return arrayTiradores;
};

 
export const ordenarPorAtaque = (copyArrayDatos) => {
  let ordenarAtaque = copyArrayDatos.sort((a, b) => {
    if (a.info.attack > b.info.attack ) {
      return -1
    }
    if (a.info.attack < b.info.attack ) {
      return 1
    }
    return 0;
  });
  return ordenarAtaque;
}

export const rolFiltro = (rol) => {
  const campeonesFiltro = arrayDatos.filter(campeon => campeon.tags.includes(rol));
  return campeonesFiltro;
}




