import { useState } from 'react'


export const AddCategory = ({ onAddCategory }) => { // tambien se puede enviar el setCategories
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue);
    setInputValue('');
    // Si fuese con setCategories
    //setCategories(categories => [...categories ,inputValue]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
