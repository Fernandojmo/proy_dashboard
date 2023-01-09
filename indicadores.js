import {getIndicadorUf, fechaArray, valorArray} from "./index.js";
import {getIndicadorUtm, fechaUtmArray, valorUtmArray} from "./index.js"; 
import {getIndicadorIpc, fechaIpcArray, valorIpcArray} from "./index.js"; 

/*Este es el grafico 2 de indicador UF*/
async function graficoUf(){ 

    await getIndicadorUf()
    const canvas = document.getElementById('uf'); 
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
    const canvas = document.getElementById('utm'); 
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
    const canvas = document.getElementById('ipc'); 
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