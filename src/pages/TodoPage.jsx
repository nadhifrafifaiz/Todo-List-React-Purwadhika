import 'bootstrap/dist/css/bootstrap.css'
import TodoItem from '../components/TodoItem';
import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux'


class TodoPage extends React.Component {
    // State
    // -Mengirim data ke component itu sendiri
    state = {
        todoList: [],
        inputTodo: ""
    }

    //Mengambil data dari axios lalu dimasukkan ke state todoList
    fetchTodo = () => {
        Axios.get("http://localhost:2000/todo")
            .then((response) => { //start execute setelah axios get sudah selesai
                this.setState({ todoList: response.data })
                //melempar banyaknya data todo list ke changeTodoCount untuk ditaro di reducer
                this.props.changeTodoCount(response.data.length)
            })
            .catch((err) => {
                alert("Terjadi kesalahan di server")
            })
    }

    //Menghapus data berdasarkan idnya
    deleteTodo = (id) => {
        Axios.delete(`http://localhost:2000/todo/${id}`)
            .then(() => {
                alert("data berhasil dihapus");
                this.fetchTodo();
            })
            .catch((err) => {
                alert("Terjadi kesalahan di server")
            })
        // this.setState({
        //   todoList: this.state.todoList.filter((val) => {
        //     return val.id != id
        //   })
        // })
    }

    //Mengubah data dengan patch dan masukkan data baru yang ingin dimasukkan
    completeTodo = (id) => {
        //patch id dikirim via url mirip delete
        Axios.patch(`http://localhost:2000/todo/${id}`, { isFinished: true })
            .then(() => {
                alert("Berhasil Complete Todo")
                this.fetchTodo()
            })
            .catch((err) => {
                alert("Terjadi kesalahan di server")
            })
    }

    //Merender list dengan cara melempar props ke component TodoItem
    renderTodoList = () => {
        // return this.statement itu untuk lempar nilai ke baris 44
        return this.state.todoList.map((val) => {
            return (
                <TodoItem completeTodoHandler={this.completeTodo}
                    deleteTodoHandler={this.deleteTodo}
                    todoData={val} />
            )
        })
    }

    //Menambahkan data baru dengan post ke axios
    addTodo = () => {
        Axios.post("http://localhost:2000/todo", { activity: this.state.inputTodo, isFinished: false })
            .then(() => {
                alert("Data berhasil ditambahkan")
                this.fetchTodo()
            })
            .catch((err) => {
                alert("Terjadi kesalahan di server")
            })
        // this.setState({
        //   todoList: [
        //     ...this.state.todoList, { activity: this.state.inputTodo, id: this.state.todoList.length + 1 }
        //   ]
        // })
    }



    //mengambil input yang dituliskan pengguna
    //lalu dimasukkan kedalam state input Todo
    inputHandler = (event) => {
        this.setState({ inputTodo: event.target.value })
    }

    componentDidMount() {
        this.fetchTodo()
    }
    // componentDidUpdate() {
    //   alert("Component Update")
    // }

    render() {

        return (
            <div className="container mt-3">
                <h1>Todo List</h1>
                <button className="btn btn-info" onClick={this.fetchTodo}>
                    Get My Todo List {this.props.todoGlobalState.todoCount}
                </button>
                {/* Merender barisan todo item dari fungsi renderTodoList() */}
                {this.renderTodoList()}

                <div className="mt-3">
                    <input onChange={this.inputHandler} type="text" className="mx-3" />
                    <button className="btn btn-primary" onClick={this.addTodo}>Add Todo</button>
                    <button onClick={this.props.incrementTodoCount}>Increment</button>
                    <button onClick={this.props.decrementTodoCount}>Decresae</button>
                    <button onClick={() => this.props.changeTodoCount(7)}>Change Todo</button>
                </div>


            </div >
        );
    }
}


const incrementTodoCount = () => {
    return {
        type: "INCREMENT_TODO_COUNT"

    }
}

const decrementTodoCount = () => {
    return {
        type: "DECREMENT_TODO_COUNT"
    }
}

const changeTodoCount = (newCount) => {
    return {
        type: "CHANGE_TODO_COUNT",
        payload: newCount
    }
}

//state itu menyimpan semua global state kita
/*state={
    todo:todo;
}*/
const mapStateToProps = (state) => {
    // state.todo.todoCount
    return {
        testingProps: 0,
        todoGlobalState: state.todo,
    }
}

//menyimpan fungsi2 yang akan dikirimkan ke reducer
const mapDispatchToProps = {
    incrementTodoCount: incrementTodoCount,
    decrementTodoCount: decrementTodoCount,
    changeTodoCount: changeTodoCount
}

//export default connect(*props yang mau kita buat global*)(*nama dari component yang di ekspor*)
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)