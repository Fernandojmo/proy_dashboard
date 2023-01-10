async function indicadores() {
    try {
      const url = "https://mindicador.cl/api";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      // console.log("fetch exitoso");
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

export default indicadores;