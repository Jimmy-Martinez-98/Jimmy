document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frmSaludo");
  form.addEventListener("submit", event=>{
      event.preventDefault();
      let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(',').sort()
      Moda(dtos);
  });
});
//encontrar-mediana
function mediana() {
  let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(',').sort(compararnum), mediana = 0;
  for (i = 0; i < dtos.length; i++) {
    dtos[i] = parseInt(dtos[i]);
  }
  if (dtos.length % 2 == 0) {
    mediana = (dtos[Math.round((dtos.length / 2) - 1)] + dtos[Math.round(dtos.length / 2)]) / 2;
    document.querySelector("#lblSaludo").innerHTML = mediana;
  }
  else {
    mediana = dtos[Math.round((dtos.length / 2) - 1)];
    document.querySelector("#lblSaludo").innerHTML = `la mediana es: ${(mediana)}`;
  }
}
//encontrar moda
function Moda(serie=[]){
  let datos=document.getElementById("txtDatos").value;
  let array=datos.split(",").sort(compararnum);
  let repetidos = [];
 let temporal = [];
  
  array.forEach((value,index)=>{
    temporal = Object.assign([],array); //Copiado de elemento
    temporal.splice(index,1); //Se elimina el elemnto q se compara
    /**
     * Se busca en temporal el elemento, y en repetido para 
     * ver si esta ingresado al array. indexOf returna
     * -1 si el elemento no se encuetra
     **/
    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1) {
       repetidos.push(value);}  
  });
  let $resp=document.getElementById("lblSaludo")
  $resp.innerHTML=`La Moda es:  ${(repetidos)}`;
  console.log(repetidos);
}
//odenar-datos
function compararnum(a, b) {
  return a - b;
}
//encontrar-media
function media(){
  let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(',').sort(compararnum), media = 0;
  for (i = 0; i < dtos.length; i++) {
    dtos[i] = parseInt(dtos[i]);
    media = media + dtos[i]
  }
  document.querySelector("#lblSaludo").innerHTML = `La media es: ${(media/dtos.length)}`;
}
//desviacion-tipica
function desviacion_tipica(){
let vlor = document.querySelector("#txtDatos").value, dtos = vlor.split(",").sort(compararnum), des_tip = 0;
for(i=o; i < dtos.length;i++){
  dtos[i] = parseInt(datos[i]);
}

}
