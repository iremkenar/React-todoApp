import React from 'react';
//Import Components
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
