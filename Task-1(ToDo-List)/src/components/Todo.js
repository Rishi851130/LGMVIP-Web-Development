import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { GrCompliance } from 'react-icons/gr';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} >
        {todo.text}
      </div>
      <div className='icons'>
        <RiDeleteBin5Fill
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <GrCompliance 
          className='done-icon'
          onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  ));
};

export default Todo;
