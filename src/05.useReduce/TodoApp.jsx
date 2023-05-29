import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
}, {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false
}]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)


    return (
        <>
            <h1>TodoApp: 10, <small> Pendientes: (2) </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group" >

                        {todos.map(todo => (
                            <li key={todo.id} className="list-group-item d-flex justify-content-between ">
                                <span className="align-self-center" >
                                    Item01
                                </span>
                                <button className="btn btn-danger" >Borrar </button>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="col-5">
                    <h4>
                        Agregar Todo
                    </h4>
                    <hr />
                    <form >
                        <input type="text" className="form-control" name="todo" placeholder="¿Que hay que hacer?" id="todo" />
                        <button className="btn btn-outline-primary mt-2 " type="submit" >Agregar</button>
                    </form>
                </div>
            </div>


        </>
    )
}

