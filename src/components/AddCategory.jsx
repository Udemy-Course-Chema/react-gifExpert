import { useState } from 'react';


export const AddCategory = ( { setCategories } ) => {




     const [inputValue, setInputValue] = useState( '' );

     const onInputChange = ({ target }) => {
          setInputValue(target.value);
     };

     const onSubmit = (event) => {
          event.preventDefault();

          if ( inputValue.trim().length <= 1  ) return; 

          setCategories( categories => [ ...categories, inputValue ] );
          setInputValue('');
     };


     return (
          // <form onSubmit={ (e) => onSubmit(e) }>
          <form onSubmit={ onSubmit }>
               <input
                    type="text"
                    placeholder="Buscar Gifts"
                    value={inputValue}
                    onChange={onInputChange}

               ></input>
          </form>
     );


};