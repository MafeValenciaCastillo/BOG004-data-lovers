
import { rolFiltro, ordenarPorAtaque, staticsMovespeed, staticsAttackRange, staticsAttackDamage } from '../src/data.js';

const dataLolTest = [
  {
    name: "Lissandra",
    info: {
      attack: 2,
    },
    tags: ["Mage"],
    stats: {
      movespeed: 325,
      attackrange: 550,
      attackdamage: 58.536,
    },
  },

  {
    name: "Aatrox",
    info: {
      attack: 8,
    },
    tags: ["Fighter", "Tank"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60.376,
    },
  },

  {
    name: "Brand",
    info: {
      attack: 2,
    },
    tags: ["Mage"],
    stats: {
      movespeed: 340,
      attackrange: 550,
      attackdamage: 57.04,
    },
  },

  {
    name: "Fiora",
    info: {
      attack: 10,
    },
    tags: ["Fighter", "Assassin"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60,
    },
  },

  {
  name: "Jinx",
    info: {
      attack: 9,
    },
    tags: ["Marksman"],
    stats: {
      movespeed: 325,
      attackrange: 525,
      attackdamage: 58.46,
    },
  },

 
]

const dataFiltrarTest = [
  {
    name: "Aatrox",
    info: {
      attack: 8,
    },
    tags: ["Fighter", "Tank"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60.376,
    },
  },

  {
    name: "Fiora",
    info: {
      attack: 10,
    },
    tags: ["Fighter", "Assassin"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60,
    },
  },

]

const dataStaticsMovespeedTest = [
  {
    name: "Aatrox",
    info: {
      attack: 8
    },
    tags: ["Fighter", "Tank"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60.376,
    },
  },

  {
    name: "Fiora",
    info: {
      attack: 10,
    },
    tags: ["Fighter", "Assassin"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60,
    },
  },

]

const datastaticsAttackRange = [
  {
    name: "Aatrox",
    info: {
      attack: 8
    },
    tags: ["Fighter", "Tank"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60.376,
    },
  },

  {
    name: "Fiora",
    info: {
      attack: 10,
    },
    tags: ["Fighter", "Assassin"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60,
    },
  },

]

const datastaticsAttackDamage = [
  {
    name: "Aatrox",
    info: {
      attack: 8
    },
    tags: ["Fighter", "Tank"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60.376,
    },
  },

  {
    name: "Fiora",
    info: {
      attack: 10,
    },
    tags: ["Fighter", "Assassin"],
    stats: {
      movespeed: 345,
      attackrange: 150,
      attackdamage: 60,
    },
  },

]

describe('rolFiltro', () => {
  it('is a function', () => {
    expect(typeof rolFiltro).toBe('function');
  });

  it('returns `luchadores`', () => {
    expect(rolFiltro(dataLolTest, "Fighter")).toEqual(dataFiltrarTest);
  });

});



describe('ordenarPorAtaque', () => {
  it('is a function', () => {
    expect(typeof ordenarPorAtaque).toBe('function');
  });

  it('returns `ordena data por nivel de ataque`', () => {
    const resultado = ordenarPorAtaque(dataLolTest);
    expect(resultado[0].info.attack).toEqual(10);
    
  });
});


describe('staticsMovespeed', () => {
  it('is a function', () => {
    expect(typeof staticsMovespeed).toBe('function');
  });

  it('returns `hace el promedio de velocidad`', () => {
    const resultado = staticsMovespeed(dataStaticsMovespeedTest);
    expect(resultado).toEqual(345);
  });
});


describe('staticsAttackRange', () => {
  it('is a function', () => {
    expect(typeof staticsAttackRange).toBe('function');
  });

  it('returns `hace el promedio de ataque`', () => {
    const resultado = staticsAttackRange(datastaticsAttackRange);
    expect(resultado).toEqual(150);
  });
});

describe('staticsAttackDamage', () => {
  it('is a function', () => {
    expect(typeof staticsAttackDamage).toBe('function');
  });

  it('returns `hace el promedio de ataque`', () => {
    const resultado = staticsAttackDamage(datastaticsAttackDamage);
    expect(resultado).toEqual(60.19);
  });
});