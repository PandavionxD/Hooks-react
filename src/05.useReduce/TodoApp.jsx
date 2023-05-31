import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { TodoHook } from "./components/hooks/TodoHook"


export const TodoApp = () => {

    const {ToggleCompleted,mensaje,onDeleteTodo,todos,todosFilter,todosTotal} = TodoHook()
    return (
        <>
            <h1>TodoApp: {todosTotal} , <small> Pendientes: ( {todosFilter}) </small> </h1>
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

