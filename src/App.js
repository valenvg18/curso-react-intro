import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar curso de intro a React.js', completed: false },
  { text: 'Estudiar ingles para la entrevista', completed: false },
  { text: 'Estudiar conceptos basicos de Js y React', completed: true },
];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </>  
  );
}



export default App;
