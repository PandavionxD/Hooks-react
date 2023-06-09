import { useEffect, useState } from "react";

export const Messaje = () => {

  const [coords, setcoords] = useState({
    x:0,
    y:0
  });

  useEffect(() => {
    
    const onMouseMove = ({x,y})=>{
      setcoords({x,y})
    }

    window.addEventListener('mousemove', onMouseMove )
    
    return()=>{
      window.removeEventListener('mouse',onMouseMove)
    }
  }, []);



  return (
    <>
    <h3 className="mt-2">
        El usuario ya existe    
    </h3> 
    <p>
      { JSON.stringify(coords) }
    </p>
    </>
  )}
