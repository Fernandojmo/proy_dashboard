const List1 = document.getElementById("list1");

async function indicadores() {
  try {
    const url = "https://mindicador.cl/api";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("fetch exitoso");

    const ufelement = document.getElementById("ufbox");
    const ivpelement = document.getElementById("ivpbox");
    const dolarelement = document.getElementById("dolarbox");
    const dolarintercambioelement = document.getElementById("dolarintercambiobox");
    const euroelement = document.getElementById("eurobox");
    const ipcelement = document.getElementById("ipcbox");
    const utmelement = document.getElementById("utmbox");
    const imacecelement = document.getElementById("imacecbox");

    //const ufelement = document.createElement("div");
    //ufelement.setAttribute("class","box");
    ufelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.uf.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.uf.valor}</p>
        </div>`;

    ivpelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.ivp.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.ivp.valor}</p>
        </div>`;

    dolarelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.dolar.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.dolar.valor}</p>
        </div>`;

    dolarintercambioelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.dolar_intercambio.nombre}</p>
        </div>
        <div class="valor">
          <p>${data.dolar_intercambio.valor}</p>
        </div>`;
        
    euroelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.euro.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.euro.valor}</p>
        </div>`;

    ipcelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.ipc.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.ipc.valor}</p>
        </div>`;
    
    utmelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.utm.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.utm.valor}</p>
        </div>`;
    
    imacecelement.innerHTML = `
        <div class="logo"></div>
        <div class="titulo">
          <p>${data.imacec.codigo}</p>
        </div>
        <div class="valor">
          <p>${data.imacec.valor}</p>
        </div>`;

    List1.appendchild(ufelement);
    List1.appendchild(ivpelement);
    List1.appendchild(dolarelement);
    List1.appendchild(dolarintercambioelement);
    List1.appendchild(euroelement);
    List1.appendchild(ipcelement);
    List1.appendchild(utmelement);
    List1.appendchild(imacecelement);
  } catch {
    console.log("Error");
  }
}
indicadores();
//fetch('https://mindicador.cl/api').then(function(response) {
//    return response.json();
//}).then(function(dailyIndicators) {
//    document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
//    document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar observado es $' + dailyIndicators.dolar.valor;
//    document.getElementById("DolarA").innerHTML = 'El valor actual del Dólar acuerdo es $' + dailyIndicators.dolar_intercambio.valor;
//    document.getElementById("Euro").innerHTML = 'El valor actual del Euro es $' + dailyIndicators.euro.valor;
//    document.getElementById("IPC").innerHTML = 'El valor actual del IPC es ' + dailyIndicators.ipc.valor;
//    document.getElementById("UTM").innerHTML = 'El valor actual de la UTM es $' + dailyIndicators.utm.valor;
//    document.getElementById("IVP").innerHTML = 'El valor actual del IVP es $' + dailyIndicators.ivp.valor;
//    document.getElementById("Imacec").innerHTML = 'El valor actual del Imacec es ' + dailyIndicators.imacec.valor;
//}).catch(function(error) {
//    console.log('Requestfailed', error);
//});


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


