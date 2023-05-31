import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"

const initialState = [
    //     {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    //      }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    const onDeleteTodo = (id) => {
        dispatch({
            type: 'remove Todo',
            payload: id
        })
    }


    const mensaje = (todo) => {

        const action = {
            type: 'add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const ToggleCompleted = (id) => {
        // console.log(id)
        dispatch({
            type:'toggle Todo',
            payload:id
        })

    }
    

    return (
        <>
            <h1>TodoApp: {todos.length} , <small> Pendientes: ( {todos.filter(todo=>todo.done === false).length }) </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos}
                        onDeleteTodo={onDeleteTodo}
                        ToggleCompleted={ToggleCompleted}
                    />

                </div>
                <div className="col-5">
                    <h4>
                        Agregar Todo
                    </h4>
                    <hr />
                    <TodoAdd onNewTodo={mensaje} />
                </div>
            </div>


        </>
    )
}

