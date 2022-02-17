// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

import data from './data/lol/lol';

const dataLol = Object.values(data.data);

export const dataFilter = (data, condicion) => {
  let megaFilter = dataLol.filter ((values) => {
    return values.data.includes (values);
  })
  return megaFilter;
  
};


