import { useForm } from "../../01.useState/hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {
    const { formState, onclickChange, ResetValue } = useForm({
        id: new Date().getTime(),
        description: '',
        done: false
    })

    const onFormSubmit =(event)=>{
        // para que no se actualize y se borre los datos
        event.preventDefault()
        if(formState.description.length<=1) return

        const newTodo = {
            id: new Date().getTime(),
            description: formState.description,
            done: false
        }

        onNewTodo(newTodo)
        ResetValue()

    }


    return (
        <>
            <form  onSubmit={onFormSubmit}>
                <input type="text"
                    className="form-control"
                    name="description"
                    value={formState.description}
                    placeholder="¿Que hay que hacer?"
                    id="todo"
                    onChange={onclickChange}
                />

                <button className="btn btn-outline-primary mt-2 "
                    type="submit" >
                    Agregar
                </button>
            </form>
        </>
    )
}
