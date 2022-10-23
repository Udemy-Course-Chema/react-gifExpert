


export const GifGrid = ( { category } ) => {

    const gifs = [1,2,3,4,5];

    return (
        <>
            <h3>{ category }</h3>
            { 
                gifs.map( gif => (
                    <p>{ gif }</p>
                ))
            }
        </>
    )
};