

// const promesa = new Promise( (resolve, reject) => {
//     // setTomeout( () => {
//     //     console.log('2 segundos despues')
//     // }, 2000)
// });
import {getHeroeById, getHeroesByOwner} from "./bases/08-imp-exp";
import heroes from "./data/heroes";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve();
//     }, 4000)
// });

// promesa.then ( () => {
//     console.log ('Then de la promesa')
// })

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve( heroe );
//     }, 4000)
// });

// promesa.then ( (heroe) => {
//     console.log ('Then de la promesa')
// })

const getHeroeByIdAsync = (id) => {
    return new  Promise( (resolve, reject) => {
    setTimeout( () => {
        const p1 = getHeroeById( id);
        // console.log(heroe);
        if (p1){
        resolve( p1 );
        } else {
            reject ('NOse puedo hallar el Heroe')
        }
    }, 4000)
});
}

getHeroeByIdAsync(1)
.then ( heroe => console.log ('Heroe', heroe))
.catch (err => console.warn (err))
     