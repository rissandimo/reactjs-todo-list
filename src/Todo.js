import React from 'react'

import './Todo.css'

function Todo({ name }) {
    return (
        <div className="todo">
            <li>{name}</li>
        </div>
    )
}

export default Todo
