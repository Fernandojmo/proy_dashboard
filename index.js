// import grafico from './graph'
// grafico('uf');

async function grafico(indicador) {
    try {
        const url = `https://mindicador.cl/api/${indicador}`;
        const response = await fetch(url);
        const index = await response.json();
        console.log(index);
        console.log("fetch exitoso");
        const fechas = await index.serie.map(x=>(x.fecha))
        const valores = await index.serie.map(x=>x.valor)
        console.log("aqui valores:")
        console.log(valores);


        const canvas = await document.getElementById('mychart')        
        const grafico1 = await new Chart(canvas,{
            type: 'line',
            data:{
                labels: fechas,
                datasets:[
                    {
                        label: `${indicador}`,
                        data: valores,
                        backgroundColor:[
                            'rgba(255,99,132,0.2)',
                            'rgba(54,162,235,0.2)',
                            'rgba(255,206,86,0.2)'
                        ],
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1
                    }

                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        })

      
    } catch {
      console.log("Error");
    }
  }

grafico('uf');





// import indexs from './modulo'
// indexs();






