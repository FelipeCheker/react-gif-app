import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Star Wars');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueCleaned = inputValue.trim();
        if(inputValueCleaned.length <= 1) return;

        // setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory(inputValueCleaned);
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
    )
}
