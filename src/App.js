import React, { useState, useEffect } from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // state stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Execute once
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  // function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

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
        onSetStatus={setStatus}
      />
      <TodoList
        todos={todos}
        onSetTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
