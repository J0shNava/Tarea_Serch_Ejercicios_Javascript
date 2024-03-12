let arr =["This", "is", "a", "sentence."];

function respuestaUno(){
    function printOutString(arr){
        let concatenar = "";
        for( let i = 0; i < arr.length; i++){
            concatenar += " " + arr[i];
        }
        return concatenar;
    }
    document.getElementById("enun1").innerHTML = printOutString(arr);
};