import { useRef } from "react"

export const UseRef = () => {

    const ref = useRef()
    
    const seleccionar=()=>{        
        ref.current.focus()
    }

    const enFoco = ()=>{
        ref.current.select()
    }

    return (


        <>
            <h1>UseRef</h1>
            <hr />

            <input ref={ref} placeholder="Ingresa tu nombre aqui" className="form form-control" type="text" name="text" />
            <button onClick={seleccionar} className="btn btn-primary mt-2" >Focus</button>
            <button onClick={enFoco} className="btn btn-info mt-2" >Select</button>

        </>
    )
}