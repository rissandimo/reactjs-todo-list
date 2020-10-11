import React from 'react'
import { Button, List, ListItem, ListItemText} from '@material-ui/core';
import db from './firebase';

import DeleteIcon from '@material-ui/icons/Delete';

import './Todo.css'

function Todo(props) {
    return (
        <List className="todo__item">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="todo"></ListItemText>
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Todo</DeleteIcon>
        </List>

    )
}

export default Todo
