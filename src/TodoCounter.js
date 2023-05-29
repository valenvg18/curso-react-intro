import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
      <h1 className='TodoCounter'>
        Has completado <span>{ completed }</span> de <span>{ total }</span> <p>TODO'S</p>
      </h1>
    );
}

export { TodoCounter };