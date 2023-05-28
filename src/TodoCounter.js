import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
      <h1>
        Has completado {completed} de {total} TODO'S
      </h1>
    );
}

export { TodoCounter };