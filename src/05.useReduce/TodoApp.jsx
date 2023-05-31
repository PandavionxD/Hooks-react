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

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState,init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )

    }, [todos])
    

    const mensaje = (todo) => {

        const action = {
            type: 'add Todo',
            payload: todo
        }
        dispatch(action)
    }

    return (
        <>
            <h1>TodoApp: 10, <small> Pendientes: (2) </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos} />

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

