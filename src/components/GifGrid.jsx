import { useEffect } from "react";
import { getGif } from "../helpers/getGifs";


export const GifGrid = ( { category } ) => {

    useEffect( () => {
        getGif( category );
    }, [ ] );

    return (
        <>
            <h3 >{ category }</h3>
        </>
    )
};