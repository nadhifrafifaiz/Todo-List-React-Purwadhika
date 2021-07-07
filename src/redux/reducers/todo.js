const init_state = {
    todoList: [],
    inputTodo: "",
    todoCount: 0
}

/*
- reducer akan mereturn state baru
- reducer menerima 2 inputan yaitu state 
dan action apa yang akan dilakukan 
terhadap state
- state diberi nilai default yaitu init_state
- action, component mendispatct sebuah object
maka akan mauk ke reducer
-apapun yang di return reducer adalah state baru kita
semua akan di kirim bahkan yang gak kita ubah
*/

//Action isinya payloadnya
const reducer = (state = init_state, action) => {
    switch (action.type) {
        case "INCREMENT_TODO_COUNT":
            return { ...state, todoCount: state.todoCount + 1 }
        case "DECREMENT_TODO_COUNT":
            return { ...state, todoCount: state.todoCount - 1 }
        case "CHANGE_TODO_COUNT":
            return { ...state, todoCount: action.payload }
        default:
            return state
    }



}

export default reducer