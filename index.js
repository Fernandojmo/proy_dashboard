
import indexs from './modulo.js'
indexs();

import grafico from './graph.js'
grafico('uf');

// const comboboxEL = document.getElementById('combobox')
// comboboxEL.addEventListener('change',cambiar())

    let elemento = document.getElementById("combobox");
    let valorElemento = elemento.options[elemento.selectedIndex].value;
    let textoElemento = elemento.options[elemento.selectedIndex].text;

function seleccionaIndicador() {
    elemento = document.getElementById("combobox");
    valorElemento = elemento.options[elemento.selectedIndex].value;
    textoElemento = elemento.options[elemento.selectedIndex].text;
    const nuevograph = document.getElementById("graphbox");
    nuevograph.setAttribute("id","graphbox")
    nuevograph.innerHTML=``
    nuevograph.innerHTML=`
    <div>
        <canvas id="mychart"></canvas>
    </div>`
    console.log(valorElemento);
    grafico(valorElemento);
  }

  document
    .getElementById("combobox")
    .addEventListener("change",seleccionaIndicador);

// const father=document.getElementById('selectform')
// function pintarform(){
//     const form = document.createElement("form")
//     form.setAttribute("id","comboboxfather")
//     form.innerHTML=`
//         <select name="" id="combobox" onchange="">
//             <option value="uf">UF</option>
//             <option value="utm">UTM</option>
//             <option value="ipc">IPC</option>
//             <option value="dolar">Dolar</option>
//             <option value="euro">Euro</option>
//             <option value="imacec">IMACEC</option>
//         </select>
//         <button id="searchbtn" onclick="cambiar()">Serch</button>`
// father.appendChild(form);
// }
// pintarform();



// async function grafico(indicador) {
//     try {
//         const url = `https://mindicador.cl/api/${indicador}`;
//         const response = await fetch(url);
//         const index = await response.json();
//         console.log(index);
//         console.log("fetch exitoso");
//         const fechas = await index.serie.map(x=> moment(x.fecha).format('YYYY/MM/DD'))
//         const valores = await index.serie.map(x=>x.valor)
//         const valoresinv= await valores.reverse();
//         // const fechascorr= await fechas.map(x=> x);
//         console.log("aqui valores:");
//         console.log(fechas);



//         const canvas = await document.getElementById('mychart')        
//         const grafico1 = await new Chart(canvas,{
//             type: 'line',
//             data:{
//                 labels: fechas,
//                 datasets:[
//                     {
//                         label: `${indicador}`,
//                         data: valoresinv,
//                         backgroundColor:[
//                             'rgba(255,99,132,0.2)',
//                             'rgba(54,162,235,0.2)',
//                             'rgba(255,206,86,0.2)'
//                         ],
//                         borderColor: 'rgba(0,0,0,1)',
//                         borderWidth: 1
//                     }

//                 ]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: false
//                     }
//                 }
//             }
//         })

      
//     } catch {
//       console.log("Error");
//     }
//   }

// grafico('uf');








