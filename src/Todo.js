import React, { useState } from 'react'
import { List, Modal, ListItem, ListItemText} from '@material-ui/core';
import db from './firebase';

import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import './Todo.css'

function Todo(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          left: 20,
          top: 20,
          height: 400,
          width: 600,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));

    const [input, setInput] = useState();
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        
        // Update todo with new text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        
        setOpen(false);
    }

      

    return (
        <>
        <List className="todo__item">

            {/* Todo Name */}
            <ListItem>
                <ListItemText primary="Todo" secondary={props.todo.todo}></ListItemText>
            </ListItem>

            {/* Edit Todo */}
            <EditIcon onClick={handleOpen} />

            {/* Delete Todo */}
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} className="todo__deleteIcon" />

            {/* Edit Todo Modal  */}
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Edit Todo</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                    <DoneIcon onClick={updateTodo} />
                </div>   
            </Modal>
        </List>
        </>
    )
}

export default Todo
