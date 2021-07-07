import React from 'react';

class TodoItem extends React.Component {

    deleteButtonHandler() {
        alert("Terhapus")
    }

    btnHandler(type) {
        alert(`Anda memencet button ${type}`)
    }

    componentWillUnmount() {
        alert("Component Unmount")
    }

    render() {
        return (
            <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
                {this.props.todoData.activity} ID: {this.props.todoData.id}
                <div>
                    <button onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)} className="btn btn-danger">Delete</button>

                    <button disabled={this.props.todoData.isFinished}
                        onClick={() => this.props.completeTodoHandler(this.props.todoData.id)}
                        className="btn btn-success">

                        {
                            /* If Ternary */
                            this.props.todoData.isFinished ? "Finished" : "Complete"
                        }

                    </button>
                </div>
            </div>
        )
    }
}

export default TodoItem;