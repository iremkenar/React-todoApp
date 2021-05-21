import React, { useState } from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Irem's ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        onSetTodos={setTodos}
        onSetInputText={setInputText}
      />
      <TodoList todos={todos} onSetTodos={setTodos} />
    </div>
  );
}

export default App;
