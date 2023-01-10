
// import indexs from './modulo.js'
// indexs();

// import grafico from './graph.js'
// grafico('uf');

import * as moment from './node_modules/moment/dist/moment.js'

const nueva= (moment.moment().format('YYYY-MM-DD') + "T00:00:00.000Z");
console.log(nueva)
console.log(moment(nueva).format('YYYY/MM/DD'))

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








