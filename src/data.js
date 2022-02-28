

// import data from './data/lol/lol.js';
// const arrayDatos = Object.values(data.data);


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
export const rolFiltro = (arrayDatos, rol) => {
  const campeonesFiltro = arrayDatos.filter(campeon => campeon.tags.includes(rol));
  return campeonesFiltro;
}

export const staticsMovespeed = (arrayDatos) => {
  let arrayMoveSpeed = [];
  arrayDatos.forEach(campeon => {
    arrayMoveSpeed.push(campeon.stats["movespeed"])
  });
  let suma = arrayMoveSpeed.reduce((a, b) =>  a + b , 0);
  let promedio = suma / arrayDatos.length;
  let promedioRedondeado = Math.round((promedio)* 100) / 100;
  //console.log("MoveSpeed: " + parseFloat(Math.round((promedio)* 100) / 100).toFixed(2));
  return promedioRedondeado;
} 

export const staticsAttackRange = (arrayDatos) => {
  let arrayAttackRange = [];
  arrayDatos.forEach(campeon => {
    arrayAttackRange.push(campeon.stats["attackrange"])
  });
  let suma = arrayAttackRange.reduce((a, b) =>  a + b , 0);
  let promedio = suma / arrayDatos.length;
  let promedioRedondeado = Math.round((promedio) * 100) / 100;
  // 345.666666666
  // 34566.666666
  // 34567
  // 345.67

  //console.log("attackrange: " + parseFloat(Math.round((promedio)* 100) / 100).toFixed(2));
  return promedioRedondeado;
}

export const staticsAttackDamage = (arrayDatos) => {
  let arrayAttackDamage = [];
  arrayDatos.forEach(campeon => {
    arrayAttackDamage.push(campeon.stats["attackdamage"])
  });
  let suma = arrayAttackDamage.reduce((a, b) =>  a + b , 0);
  let promedio = suma / arrayDatos.length;
  let promedioRedondeado = Math.round((promedio)* 100) / 100;
  //console.log("attackdamage: " + parseFloat(Math.round((promedio)* 100) / 100).toFixed(2));
  return promedioRedondeado;
}




