import { useState } from 'react';
import { AddCategory } from './components/AddCategory';



export const GiftExpertApp = () => {

     const [categories, setCategories] = useState(['Demon Slayer', 'Naruto', 'Yu-Gi-Oh']);
     
     const onAddCategory = () => {
          // console.log('One Piece') Debug
          setCategories( [ ...categories, 'One Piece' ] ); // Primera solución, mejor.
          //setCategories( cat => [...cat, 'One Piece' ] );  Segunda solución 
     };

     return (
          <>
               {/* TíTULO */}
               <h1>Gift Expert App</h1>

               {/* INPUT */}
               <AddCategory setCategories={ setCategories } />
               {/* LISTADO DE GIF */}
               {/* <button onClick={ onAddCategory }>Agregar</button> */}
               <ol>
                    { categories.map( category => {
                         return <li key={ category } > {category} </li>
                    } ) }
               </ol>
               {/* GIT ITEM */}
          </>
     );
};
