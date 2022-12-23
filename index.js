const canvas = document.getElementById('mychart')

const grafico1 = new Chart(canvas,{
    type: 'bar',
    data:{
        labels:['Red','Blue','Yellow'],
        datasets:[
            {
                label:'Colores',
                data:[20,10,30],
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


