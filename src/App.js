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
  { text: 'Yo soy capaz de pasar la entrevista', completed: true },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  //Estados Derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan Todos de ' + searchValue);

  return (
    <>

      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} 
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
      />

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
