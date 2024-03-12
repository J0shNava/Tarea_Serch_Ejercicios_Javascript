const numeros = [1, 2, 3, 4];

const myFncCallBackScript2 = (element, index, array) => `soy el indice ${index}, valor ${element} del arreglo ${array}`;

const sumarFinal = numeros.reduce((total , myFncCallBackScript2 ) =>{
    return total + myFncCallBackScript2;
}, 0);

function multiplicacion(numeros){
    let multiplicacion = 1;
    for (let i=0; i< numeros; i++){
        multiplicacion *= (numeros - i);
    }
    return multiplicacion;
}

 function respuestaTres(){
    document.getElementById("enun3").innerHTML = `El total de la suma del arreglo es: ${sumarFinal} y su producto es: ${ multiplicacion(numeros.length)}`;
 }