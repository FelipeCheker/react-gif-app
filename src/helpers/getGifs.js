export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=fcblH0iHT6Vg7rPBNqbTEuo6Shn9Oaf7&q=${category}&limit=20`
    const respuesta = await fetch( url );
    const {data} = await respuesta.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}