import { useEffect, useReducer } from "react"
import { todoReducer } from "../../todoReducer"

export const TodoHook = () => {

  const initialState = []

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
  }
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
      type: 'toggle Todo',
      payload: id
    })

  }

return {
  ToggleCompleted,
  mensaje,
  onDeleteTodo,
  todos,
  todosFilter : todos.filter(todo=>todo.done === false).length,
  todosTotal: todos.length
}
}


