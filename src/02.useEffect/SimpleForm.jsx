import { useEffect, useState } from "react"
import { Messaje } from "./Messaje";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Miguel',
        email: 'miguel@mail.com'
    });
    const { username, email } = formState

    const onclickChange = ({ target }) => {
        const { name, value } = target
        // console.log({ name, value })
        setformState({
            ...formState,
            [name]: value
        })
    }

    // USOS DEL USE EFFECT
    useEffect(()=>{
        // console.log('Hola estamos usando use efect')
    },[])

    useEffect(()=>{
        // console.log('Cambio en el formulario')
    },[formState])

    useEffect(()=>{
        // console.log('cambio dentro del formulario en email')
    },[email])


    return (
        <>
            <h1>
                Formulario simple
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
            
        { (username === 'Miguel2') && <Messaje/>  }
        </>
    )
}
