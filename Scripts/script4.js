let estudianteDelCursoUno = [`Math`, `English`, `Programming`];
let estudianteDelCursoDos = [`Geography`, `Spanish`, `Programming`];

function respuestaCuatro(){
    for(let b=0; b < estudianteDelCursoUno.length; b++){
        const cursoUno = estudianteDelCursoUno[b];
        for(let a=0; a < estudianteDelCursoDos.length; a++){
        const cursoDos = estudianteDelCursoDos[a];
        
        if (cursoUno === cursoDos){
            console.log(`La materia ${cursoUno} dentro de la comparación esta repetida`);
            document.getElementById("enun4").innerHTML = `La materia ${cursoUno} dentro de la comparación esta repetida` ;
        }else{
            document.getElementById("enun4").innerHTML = `No se encontraron materias repetidas.`;
        }
    }  
    }
}