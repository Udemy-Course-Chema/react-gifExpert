import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GiftExpertApp = () => {

     const [categories, setCategories] = useState(['Demon Slayer']);

     const onAddCategory = ( newCategory ) => {
          // Validar que no sea duplicados
          // Si existe duplicado, no que hacer nada. (Sólo basta con return)
          if( categories.includes( newCategory ) ) return; 

          setCategories([...categories, newCategory ]); // Primera solución, mejor.
     };

     return (
          <>
               {/* TíTULO */}
               <h1>Gift Expert App</h1>

               {/* INPUT */}
               <AddCategory
                    onNewCategory={ value => onAddCategory( value ) }
               />
               {/* LISTADO DE GIF */}
               {categories.map( ( category ) => (
                         <GifGrid key={ category } category={ category }  />
                    )
               )}
          </>
     );
};
