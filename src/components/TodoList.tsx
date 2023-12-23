import React, {useState} from 'react';

interface ITodo {
    text: string;
    complete: boolean;
}

interface Props {
    todos: ITodo[];
    toggleTodo: (index: number) => void;
    className?: string; 
    editTodo: (text: string, index: number) => void;
    edit: { index: number, text: string } | null;
    setEdit: React.Dispatch<React.SetStateAction<{ index: number, text: string } | null>>;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, editTodo, edit, setEdit  }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, index: number): void => {
      event.preventDefault();
      editTodo(value, index);
    };
    return(
    <ul style={{ listStyleType: 'none' }}>
      {todos.map((todo, index) => (
        <li key={index}>
          {edit?.index === index ? (
            <form onSubmit={(event) => handleSubmit(event, index)}>
              <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </form>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleTodo(index)}
              />
              {todo.text}
              <button onClick={() => setEdit({ index, text: todo.text })}>Edit</button>
            </>
          )}
        </li>
      ))}  
    </ul>
    )
};

export default TodoList;