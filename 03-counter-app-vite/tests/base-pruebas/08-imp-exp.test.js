import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test ('getHeroeById debe retornar un heroe por ID', () =>{
    
    const id = 1;
    const hero =getHeroeById (id);
    
    expect (hero).toEqual ({ id:1, name: 'Batman', owner: 'DC'})
    })

test ('getHeroeByID debe de retornar undefined si  no existe', () => {
    const id=100
    const hero=getHeroeById (id);
    expect (hero).toBeFalsy();
})


test ('getHeroesByOwner debe de regresar heroes de Marvel', ()=> {

    const owner ='Marvel';
    const heroes = getHeroesByOwner( owner );

   //console.log (heores)


     expect (heroes.length ).toBe(2);
//     expect (heroes).toEqual([
//     {id:1, name:'Batman', owner: 'DC'},
//     {id:3, name: 'Superman', owner: 'DC'},
//     {id:4, name:'Flash', owner: 'DC'}
// ]);

    expect (heroes).toEqual(heroes.filter ((heroe)=>  heroe.owner===owner));

})

})  
    
