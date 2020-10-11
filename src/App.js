import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();
    console.log('entere clicked');
    setTodos([...todos, input]);
    console.log(todos);
    setInput('');
  }
  return (
    <div className="app">
        <form>
          <FormControl>
            <InputLabel>Enter a todo item</InputLabel>
            <Input value={input} placeholder="Enter a todo item" onChange={e => setInput(e.target.value)} />
          </FormControl>
          <Button variant="contained" type="submit" color="primary" disabled={!input} onClick={addTodo}>Add Todo</Button>
        </form>
        <ul>
        {todos.map(todo => (
            <li key={todo}>{todo}</li>
        ))}
        </ul>
    </div>
  );
}

export default App;
