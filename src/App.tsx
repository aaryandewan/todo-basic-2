import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [edit, setEdit] = useState<{ index: number, text: string } | null>(null);

  const addTodo: (text: string) => void = (text) => {
    const newTodos = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const toggleTodo: (index: number) => void = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const editTodo: (text: string, index: number) => void = (text, index) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
    setEdit(null);
  };

  return (
    <div className="todo-container">
    <AddTodo addTodo={addTodo} className="add-todo" />
    <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} edit={edit} setEdit={setEdit} className="todo-list" />
    {/* <TodoList todos={todos} toggleTodo={toggleTodo} className="todo-list" /> */}
  </div>
  );
};

export default App;