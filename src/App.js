import React, { useState } from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <header>
        <h1>Irem's ToDo List</h1>
      </header>
      <Form onSetInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
