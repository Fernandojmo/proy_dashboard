/*import {getIndicadorUf, fechaArray, valorArray} from "./index.js";
import {getIndicadorUtm, fechaUtmArray, valorUtmArray} from "./index.js"; 
import {getIndicadorIpc, fechaIpcArray, valorIpcArray} from "./index.js";*/
import {getIndicadores, indicators_map} from "./index.js"; 


async function displayIndicators(){
    
    // Array, lista con los id del span del html. 
    const spanIndicadores = document.getElementsByClassName('indicador')
    
    //Trae los datos de la fecha actual convertidos a jason y los guarda en variable data
    let data = await getIndicadores()
    
    //Recorro los datos de los span
    for (let i = 0; i < spanIndicadores.length; i++) {
        // i : numero. 

        //Indicador map trae los valores de los indicadores de la api
        const llave_del_indicador = indicators_map[i]


        // Por indicador, ej: data['uf'] -> data
        const data_por_indicador = data[llave_del_indicador]

        // Dispplay, "pinta"
        document.getElementById(llave_del_indicador).innerText = data_por_indicador.valor
      }
    }

setTimeout( () => {

    displayIndicators()
}, 1000 )




import { cargarIndicadores } from "./index.js";
  let miGrafico;
  let elemento = document.getElementById("indicador");
  let valorElemento = elemento.options[elemento.selectedIndex].value;
  let textoElemento = elemento.options[elemento.selectedIndex].text;
  
  function seleccionaIndicador() {
    elemento = document.getElementById("indicador");
    valorElemento = elemento.options[elemento.selectedIndex].value;
    textoElemento = elemento.options[elemento.selectedIndex].text;
    cargarGrafico(valorElemento);
  }
  
  async function cargarGrafico(valorElemento) {
    let [fechas, valores] = await cargarIndicadores(valorElemento);
    const grafico = document.getElementById("grafico");
  
  
    if(miGrafico) {
      miGrafico.destroy();
    }
  
    miGrafico = new Chart(grafico, {
      type: "line",
      data: {
        labels: fechas,
        datasets: [
          {
            label: textoElemento,
            data: valores,
            backgroundColor: "rgb(75, 192, 192)",
          },
        ],
      },
    });
  }
  
  cargarGrafico(valorElemento);
  
  document
    .getElementById("indicador")
    .addEventListener("change", seleccionaIndicador);
  
 



