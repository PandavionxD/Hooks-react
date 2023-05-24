import { useState } from "react"

export const UseCounter=(initialValue=10)=>{

    const  [value,setValue ] = useState(initialValue)

    const increment = (valor = 1)=>{
        setValue(value+valor)
    }

    const decrement = (valor=1)=>{
        if(value== 0) return
        setValue(value-valor)
    }

    const reset =()=>{
        setValue(initialValue)
    }

    return{
        value,
        increment,
        decrement,
        reset
    }

}