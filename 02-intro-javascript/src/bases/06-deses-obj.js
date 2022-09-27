

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log (nombre);
// console.log( edad);
// console.log(clave);


const useContext = ({ nombre, edad, rango = 'Capitan'}) => {
 return{
    nombreClave: clave,
    anios:edad,
    latlng: {
        lat: 14.12541,
        lng: -12.3232,
    }
 }

    console.log (nombre, edad, rango)
}

const {nombreClave, anios, latlng} = useContext (persona);

console.log(nombreClave, anios);
console.log(lat, lng);