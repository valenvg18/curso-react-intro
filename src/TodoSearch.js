import './TodoSearch.css';

function TodoSearch() {
    return (
      <input 
      placeholder="Buscar Tarea" 
      className="TodoSearch"
      onChange={(event) => {
        console.log('Escribiste en el TodoSearch');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}/>
    );
}

export { TodoSearch };