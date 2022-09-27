// import { heroes } from './data/heroes';

// import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

export const getHeroeById = (id) => {
    return heroes.find( (heroe) =>  heroe.id === id );
}


// console.log (getHeroeById (2));
//console.log( heroes );



// const getHeroesByOwner = (owner ) => heroes.find ( (heroe) => heroe.id === id);

// cpnsole.log ( getHeroesOwner ('DC'))


export const getHeroesByOwner = (owner ) => heroes.filter ( (heroe) => heroe.owner === owner);

console.log ( getHeroesByOwner ('Marvel'));


