
import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones";

describe ('Pruebas en 05-funciones', () => { 

    test('getUser debe deretornar un objeto', ()=>{ 

    const testUser ={
        uid: 'ABC123',
        username: 'El_papi1502'
    }
    const user =getUser();
    expect( testUser).toEqual( user);
    
    })


    

test('getUsuarioActivo debe de retornar un objeto', ()=> {

    const name = 'Aldemar';
    const user = getUsuarioActivo (name);

    expect (user).toStrictEqual({
        uid: 'ABC567',
        username: name
    })
})
})