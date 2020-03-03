document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frmSaludo");
  form.addEventListener("submit", event=>{
      event.preventDefault();
      moda();
  });
});

function mediana() {
  let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(',').sort(), mediana = 0;
  for (i = 0; i < dtos.length; i++) {
    dtos[i] = parseInt(dtos[i]);
  }
  if (dtos.length % 2 == 0) {
    mediana = (dtos[Math.round((dtos.length / 2) - 1)] + dtos[Math.round(dtos.length / 2)]) / 2;
    document.querySelector("#lblSaludo").innerHTML = mediana;
  }
  else {
    mediana = dtos[Math.round((dtos.length / 2) - 1)];
    document.querySelector("#lblSaludo").innerHTML = mediana;
  }
}
function moda(){
  let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(',').sort(), mayor = 0, frc =vlor.split(',').sort() ,moda=0;
  for (i = 0; i < dtos.length; i++) {
    dtos[i] = parseInt(dtos[i]);
    frc[i]=0;
  }
}
