// estas funciones son de ejemplo

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


