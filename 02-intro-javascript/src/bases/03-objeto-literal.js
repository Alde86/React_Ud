

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555552145,
        lat: 14.32221,
        lng: 34.9558222,
        
    }

};

const persona2 = {...persona};
persona2.nombre= 'PETER';

console.log (persona2);
console.log (persona);