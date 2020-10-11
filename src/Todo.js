import React, { useState } from 'react'
import { List, Modal, ListItem, ListItemText} from '@material-ui/core';
import db from './firebase';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import './Todo.css'

function Todo(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));

      
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    }

      

    return (
        <>
        <List className="todo__item">
            <ListItem>
                <ListItemText primary="Todo" secondary={props.todo.todo}></ListItemText>
            </ListItem>
            <EditIcon onClick={handleOpen} />
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} className="todo__deleteIcon" />
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Edit Todo</h1>
                    <button onClick={e => setOpen(false)}>X</button>
                </div>   
            </Modal>
        </List>
        </>
    )
}

export default Todo
