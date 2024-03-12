let personas = ["María", "Dani", "Luis", "Juan", "Camila"];
let nombreLista = [];
let listaLuis = [];

function listaConNombres(){
    for (let i = 0; i < personas.length; i++) {
        const nombre = personas[i];
        nombreLista.push(`<li>${nombre}</li>`);
    }
    document.getElementById("enun5").innerHTML = nombreLista.join("");
}

function moverDani(){
    dani = personas.splice(1,1);
    document.getElementById("dani").innerHTML = `Se ha eliminado a : ${dani}`;
}

function moverJuan(){
    juan = personas.splice(2,1);
    document.getElementById("juan").innerHTML = `Se ha eliminado a : ${juan}`;
}

function moverLuis(){
    luis = personas.splice(1,1);
    agregarLuis = personas.unshift("luis");

    for (let i = 0; i < personas.length; i++) {
        const nombreDos = personas[i];
        listaLuis.push(`<li>${nombreDos}</li>`);
    }
    document.getElementById("luis").innerHTML = listaLuis.join("");
}
