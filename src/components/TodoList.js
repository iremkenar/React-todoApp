import React from 'react';
//Import Components
import Todo from './Todo';

const TodoList = ({ todos, onSetTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            onSetTodos={onSetTodos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
