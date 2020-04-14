import { reducer, initialState } from '../reducers/reducer';

import React, { useState, useReducer } from 'react';

function TodoForm() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
        // console.log('e', e)
        // console.log('e value', e.target.value)
    }


    return (
        <div className="todo-list">
            <div>
                <input
                    className='todo-input'
                    type="text"
                    name='newTodo'
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button
                    onClick={() =>
                        dispatch({ type: 'ADD_TODO', payload: newTodo })
                    }
                >
                    Add
                    </button>
            </div>
            <button className='clear-btn'
                    onClick={() => dispatch({ type: 'CLEAR_DONE' })}
                    >
                Clear Done
            </button>
            {state.map(todo => (
                <div
                    key={todo.id}
                    className={`item${todo.completed ? ' done': ''}`}
                    onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                >
                    <p key={todo.id}>
                        {todo.item}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TodoForm;