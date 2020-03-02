document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frmSaludo");
  form.addEventListener("submit", event=>{
      event.preventDefault();
      mediana();
  });
});

function mediana() {
  let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(',').sort(), suma1 = 0;
  for (i = 0; i < dtos.length; i++) {
    dtos[i] = parseInt(dtos[i]);
  }
  if (dtos.length % 2 == 0) {
    suma1 = (dtos[Math.round((dtos.length / 2) - 1)] + dtos[Math.round(dtos.length / 2)]) / 2;
    document.querySelector("#lblSaludo").innerHTML = suma1;
  }
  else {
    suma1 = dtos[Math.round((dtos.length / 2) - 1)];
    document.querySelector("#lblSaludo").innerHTML = suma1;
  }
}
