import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import Todo from './Todo';
import './App.css';
import firebase from 'firebase';


import db from './firebase';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();
    // Set TODOs to local storage
    setTodos([...todos, input]);
    setInput('');

    // Save TODO item to db
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  // Load all TODOs from DB when component loads
  // Each time a TODO is added or modified - changes will be updated accordingly in real-time
  useEffect(() => {
      db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
      })
  }, []);

  return (
    <div className="app">
        <form>
          <FormControl>
            <InputLabel>Enter a todo item</InputLabel>
            <Input value={input} placeholder="Enter a todo item" onChange={e => setInput(e.target.value)} />
          </FormControl>
          <Button variant="contained" type="submit" color="primary" disabled={!input} onClick={addTodo}>Add Todo</Button>
        </form>
        <ul className="todo__list">
        {todos.map(todo => (
          // todo.todo, todo.id
            <Todo todo={todo} />
        ))}
        </ul>
    </div>
  );
}

export default App;
