function TodoCounter({ total, completed }) {
    return (
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px',
    }}>
        Has completado {completed} de {total} TODO'S
      </h1>
    );
}

export { TodoCounter };