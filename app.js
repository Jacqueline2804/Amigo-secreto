// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres =[]

function agregarAmigo(){
  let amigos = document.querySelector('input').value;
  if (amigos == ''){
    alert ('Por favor, inserte un nombre');
  }
  else{
    nombres.push(amigos);
  }
  console.log(nombres);
  limpiarCaja();
  listaActualizada();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';    
}

function listaActualizada(){
    let nuevaLista = document.getElementById('listaAmigos');
    nuevaLista.innertHTML ='';
    let nuevoLi = document.createElement('li'); 
    for (var j=0; j<=nombres.length-1; j++){
        nuevoLi.innerHTML=nombres[j];
        nuevaLista.appendChild(nuevoLi);
}
}

function sortearAmigo(){
    if (nombres.length<=1){
        alert ('Ingresa al menos dos nombres para poder jugar')
    }
    else {nombres.length>=2}

    let nombreSorteado = Math.floor(Math.random()*nombres.length)-1;
    let nombreFinal = document.getElementById('resultado');
    nombreFinal.innerHTML= nombres[nombreSorteado];
}
