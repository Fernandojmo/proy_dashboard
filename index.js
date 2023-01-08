let  fechaArray = [], valorArray = [] // creamos estos array para guardar la informacion consumida relevante de la api, con motivo de llevarla a nuestro grafico

/*Función para UF*/
async function getIndicadorUf(){
    const response =  await fetch('https://mindicador.cl/api/uf')// usamos fetch o axios para consumir nuestra api
    const data = await response.json() // con fetch debemos pasar la informacion de json a js con el metodo json()


 //Iteramos la info
 const fechas = data.serie.map(uf => uf.fecha)
 const valores = data.serie.map(uf => uf.valor)

  //guardamos la info en los array 
  fechaArray = fechas;
  valorArray = valores;

}
   

/*Función para UTM*/
let  fechaUtmArray = [], valorUtmArray = [] // creamos estos array para guardar la informacion consumida relevante de la api, con motivo de llevarla a nuestro grafico


async function getIndicadorUtm(){
    const response =  await fetch('https://mindicador.cl/api/utm')// usamos fetch o axios para consumir nuestra api
    const data = await response.json() // con fetch debemos pasar la informacion de json a js con el metodo json()


 //Iteramos la info
 const fechas = data.serie.map(utm => utm.fecha)
 const valores = data.serie.map(utm => utm.valor)

  //guardamos la info en los array 
  fechaUtmArray = fechas;
  valorUtmArray = valores;

}




/*Función para IPC*/
let  fechaIpcArray = [], valorIpcArray = [] // creamos estos array para guardar la informacion consumida relevante de la api, con motivo de llevarla a nuestro grafico


async function getIndicadorIpc(){
    const response =  await fetch('https://mindicador.cl/api/ipc')// usamos fetch o axios para consumir nuestra api
    const data = await response.json() // con fetch debemos pasar la informacion de json a js con el metodo json()


 //Iteramos la info
 const fechas = data.serie.map(ipc => ipc.fecha)
 const valores = data.serie.map(ipc => ipc.valor)

  //guardamos la info en los array 
  fechaIpcArray = fechas;
  valorIpcArray = valores;

}

function showChart(){
    getSelectValue = document.getElementById("combobox").value;
    if(getSelectValue==="uf1"){
        document.getElementById("uf").style.display = "inline-block";
        document.getElementById("utm").style.display = "none";
        document.getElementById("ipc").style.display = "none";
      }else if(getSelectValue==="utm2"){
        document.getElementById("uf").style.display = "none";
        document.getElementById("utm").style.display = "inline-block";
        document.getElementById("ipc").style.display = "none";
      }else if(getSelectValue==="ipc6"){
        document.getElementById("uf").style.display = "none";
        document.getElementById("utm").style.display = "none";
        document.getElementById("ipc").style.display = "inline-block";
  
    }
}

  export {getIndicadorUf, fechaArray, valorArray}; // exportamos tanto los array como la funcion geData()
  export {getIndicadorUtm, fechaUtmArray, valorUtmArray};
  export {getIndicadorIpc, fechaIpcArray, valorIpcArray};