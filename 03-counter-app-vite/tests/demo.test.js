

//describe('Pruebas en <DemoCompnent />', ()=> {})

test('Esta es una prueba mia de yo', () => {
    
    // if ( 0===1) {
    //     throw new Error ("NO puede dividir entre cero")
    // }

    const message1 = "HOLA MUNDO";
    const message2 = message1.trim();
    expect (message1).toBe (message2);
})
