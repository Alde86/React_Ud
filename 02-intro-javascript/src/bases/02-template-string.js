const nombre ='Aldemar';
const apellido ='Aguilera';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} 
${apellido}`;


// let valorDado =5;
// valorDado=4;

console.log(nombreCompleto);

function getSaludo (nombre) {
    return 'Hola' + nombre;
}

console.log ( `Este es un texto: ${ getSaludo( nombre )} `)

