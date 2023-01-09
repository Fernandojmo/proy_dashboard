async function grafico(indicador) {
    try {
        const url = `https://mindicador.cl/api/${indicador}`;
        const response = await fetch(url);
        const index = await response.json();
        console.log(index);
        console.log("fetch exitoso");
            
        const canvas = document.getElementById('mychart')

        const grafico1 = new Chart(canvas,{
            type: 'bar',
            data:{
                labels:['Red','Blue','Yellow'],
                datasets:[
                    {
                        label:'Colores',
                        data:[index.serie.valor],
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
                        beginAtZero: true
                    }
                }
            }
        })

      
    } catch {
      console.log("Error");
    }
  }
  
//   grafico('uf');
export default grafico();