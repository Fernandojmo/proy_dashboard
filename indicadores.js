import {getIndicadorUf, fechaArray, valorArray} from "./index.js";
import {getIndicadorUtm, fechaUtmArray, valorUtmArray} from "./index.js"; //Acordarse de colocar el tipo de archivo al exportar, agregar el type module al package json y al script del index.html
import {getIndicadorIpc, fechaIpcArray, valorIpcArray} from "./index.js"; 

/*Este es el grafico 2 de indicador UF*/
async function graficoUf(){ // envolvemos el grafico en una funcion asincrona, para poder utilizar la informacion consumida de la api

    await getIndicadorUf()

    const canvas = document.getElementById('uf'); // seleccionamos la etiqueta con id que hicimos en el html


    const graficoUf = new Chart(canvas, { // Creamos el grafico 
    
        type: 'line', // tipo de grafico
        
        data:{
            labels: fechaArray, // nombres en eje X
            datasets: [
                {
                    label: 'UF', //BOTON DE SELECCIONAR O DESELECCIONAR EL GRAFICO
                    data: valorArray, //INFORMACION EN EJE Y
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                
            ]
        },
            //PODEMOS AGREGAR OPTIONS DE CHART.JS (OPCIONAL) 
    }) 

}

graficoUf()//Llamamos al grafico





/*Este es el grafico 2 de indicador UTM*/
async function graficoUtm(){ // envolvemos el grafico en una funcion asincrona, para poder utilizar la informacion consumida de la api

    await getIndicadorUtm()

    const canvas = document.getElementById('utm'); // seleccionamos la etiqueta con id que hicimos en el html


    const graficoUtm = new Chart(canvas, { // Creamos el grafico 
    
        type: 'line', // tipo de grafico
        
        data:{
            labels: fechaUtmArray, // nombres en eje X
            datasets: [
                {
                    label: 'UTM', //BOTON DE SELECCIONAR O DESELECCIONAR EL GRAFICO
                    data: valorUtmArray, //INFORMACION EN EJE Y
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                
            ]
        },
            //PODEMOS AGREGAR OPTIONS DE CHART.JS (OPCIONAL) 
    }) 

}

graficoUtm()//Llamamos al grafico



/*Este es el grafico 3 de indicador IPC*/
async function graficoIpc(){ // envolvemos el grafico en una funcion asincrona, para poder utilizar la informacion consumida de la api

    await getIndicadorIpc()

    const canvas = document.getElementById('ipc'); // seleccionamos la etiqueta con id que hicimos en el html


    const graficoIpc = new Chart(canvas, { // Creamos el grafico 
    
        type: 'line', // tipo de grafico
        
        data:{
            labels: fechaIpcArray, // nombres en eje X
            datasets: [
                {
                    label: 'IPC', //BOTON DE SELECCIONAR O DESELECCIONAR EL GRAFICO
                    data: valorIpcArray, //INFORMACION EN EJE Y
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                
            ]
        },
            //PODEMOS AGREGAR OPTIONS DE CHART.JS (OPCIONAL) 
    }) 

}

graficoIpc()//Llamamos al grafico