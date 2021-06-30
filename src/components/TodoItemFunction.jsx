import React from 'react'

const TodoItemFunction = (props) => {

    const deleteButtonHandler = () => {
        alert("Terhapus")
    }

    const btnHandler = (type) => {
        alert(`Anda memencet button ${type}`)
    }

    return (
        <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
            {props.todoData.activity} ID: {props.todoData.id}
            <div>
                <button onClick={deleteButtonHandler} className="btn btn-danger">Delete</button>
                <button onClick={() => btnHandler("COMPLETE")} className="btn btn-success">Complete</button>
            </div>
        </div>
    )
}

export default TodoItemFunction