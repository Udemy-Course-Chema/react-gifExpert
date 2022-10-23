export const getGif = async( category ) => {
    // console.log( process.env );
    const url = `https://api.giphy.com/v1/gifs/search?api_key=enOEhfSGCzjch011PIqvaMoVWiY2CVoi&q=${ category }&limit=1`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    console.log( gifs );
    return gifs;
}