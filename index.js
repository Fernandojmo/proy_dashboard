const url = 'https://mindicador.cl/api'
async function getIndicadores(){
const fetchingData = await fetch(url)
const data = await fetchingData.json()
return data
}

async function cargarIndicadores(valorElemento){
  const url = "https://mindicador.cl/api/" + valorElemento;
  const response = await fetch(url);
  const data = await response.json();

  const fechasArray = data.serie.map(d => d.fecha);
  const valoresArray = data.serie.map(d => d.valor);

  return [fechasArray, valoresArray];
}


  export {getIndicadores};
  export const indicators_map = ['uf', 'ipc', 'utm', 'imacec', 'dolar_intercambio', 'ivp', 'dolar', 'euro']
  export {cargarIndicadores};