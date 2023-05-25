import { useForm } from "../01.useState/hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onclickChange , ResetValue} = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formState



    return (
        <>
            <h1>
                Formulario Custom Hook
            </h1>
            <hr />
            <input type="text"
                name="username"
                className="form-control"
                placeholder="Juan Carlos"
                value={username}
                onChange={onclickChange} />
            <input type="email"
                name="email"
                className="form-control mt-2"
                placeholder="Juan@mail.com"
                value={email}
                onChange={onclickChange} />
            <input type="password"
                name="password"
                className="form-control mt-2"
                value={password}
                onChange={onclickChange} />

            <button className="btn btn-primary mt-2" onClick={ResetValue}> Reset</button>

        </>
    )
}
