import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCreate = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, inputValue]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditIndex(-1);
  };

  const handleUpdate = (index) => {
    handleEdit(index);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
        style={{ marginBottom: '10px', width: '100%', padding: '5px' }}
      />
      <button onClick={handleCreate} style={{ marginBottom: '10px', padding: '5px' }}>
        {editIndex === -1 ? 'Add Task' : 'Update Task'}
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {todo}
            <button onClick={() => handleEdit(index)} style={{ marginLeft: '5px', padding: '2px' }}>Edit</button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '5px', padding: '2px' }}>Delete</button>
            <button onClick={() => handleUpdate(index)} style={{ marginLeft: '5px', padding: '2px' }}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;