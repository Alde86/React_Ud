

// const getImagenPromesa = () => {
//     const promesa =new Promise ((resolve, reject) => {
//         resolve('https://centros.pao.com.co/')
//     })
//     return promesa;
// }

// getImagenPromesa().then (console.log);

const getImagen = async () => {

    try {

    const apikey = 'Z8bKfK1Rjq0nWXCy9UdKJzu3F7Bh55RM';
    const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);  
    const {data} =await resp.json(); 
    const {url} =data.images.original;

    const img =document.createElement ('img');
    img.src = url;
    document.body.append(img);

    }
    catch (error){

    }
}

getImagen ();


// const apikey = 'Z8bKfK1Rjq0nWXCy9UdKJzu3F7Bh55RM';

// const peticion =fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

// peticion
//     .then( resp => resp.json ())


//     .then (({data}) => {
//         const { url } =data.images.original;

//         const img =document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//         console.log(data)
//     })
//     .catch ( console.warn );u