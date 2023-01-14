async function grafico(indicador) {
    try {

        const url = `https://mindicador.cl/api/${indicador}`;
        const response = await fetch(url);
        const index = await response.json();
        const fechas = await index.serie.map(x=>new Date (x.fecha).toLocaleDateString())
        const valores = await index.serie.map(x=>x.valor)
        const valoresinv= await valores.reverse();
        const fechasinv= await fechas.reverse();


        const canvas = await document.getElementById('mychart')        
        const grafico1 = await new Chart(canvas,{
            type: 'line',
            data:{
                labels: fechasinv,
                datasets:[
                    {
                        label: `${indicador}`,
                        data: valoresinv,
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
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        })

      
    } catch {
    //   console.log("Error");
    }
  }


export default grafico;