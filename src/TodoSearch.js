import React from 'react';
import './TodoSearch.css';

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuarios buscan Todos de ' + searchValue);

    return (
      <input 
      placeholder="Buscar Tarea" 
      className="TodoSearch"
      value = {searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        // console.log('Escribiste en el TodoSearch');
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      }}/>
    );
}

export { TodoSearch };