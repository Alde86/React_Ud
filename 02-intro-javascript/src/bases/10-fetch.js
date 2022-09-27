

const apikey = 'Z8bKfK1Rjq0nWXCy9UdKJzu3F7Bh55RM';

const peticion =fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

peticion
    .then( resp => resp.json ())


    .then (({data}) => {
        const { url } =data.images.original;

        const img =document.createElement('img');
        img.src = url;

        document.body.append( img );
        console.log(data)
    })
    .catch ( console.warn );
    