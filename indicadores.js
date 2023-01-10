import {getIndicadorUf, fechaArray, valorArray} from "./index.js";
import {getIndicadorUtm, fechaUtmArray, valorUtmArray} from "./index.js"; 
import {getIndicadorIpc, fechaIpcArray, valorIpcArray} from "./index.js"; 
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


/*Este es el grafico 2 de indicador UF*/
async function graficoUf(){ 

    await getIndicadorUf()
    const canvas = document.getElementById('UF'); 
    const graficoUf = new Chart(canvas, { 
    
        type: 'line', 
        
        data:{
            labels: fechaArray, 
            datasets: [
                {
                    label: 'UF', 
                    data: valorArray, 
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                
            ]
        },
           
    }) 

}

graficoUf()





async function graficoUtm(){ 

    await getIndicadorUtm()
    const canvas = document.getElementById('UTM'); 
    const graficoUtm = new Chart(canvas, { 
        type: 'line', 
        
        data:{
            labels: fechaUtmArray, 
            datasets: [
                {
                    label: 'UTM', 
                    data: valorUtmArray, 
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                
            ]
        },
          
    }) 

}

graficoUtm()




async function graficoIpc(){ 

    await getIndicadorIpc()
    const canvas = document.getElementById('IPC'); 
    const graficoIpc = new Chart(canvas, { 
        type: 'line', 
        
        data:{
            labels: fechaIpcArray, 
            datasets: [
                {
                    label: 'IPC', 
                    data: valorIpcArray, 
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                
            ]
        },
            
    }) 

}

graficoIpc()