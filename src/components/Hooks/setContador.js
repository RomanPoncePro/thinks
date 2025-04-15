import { useState } from "react"

// Falta manejar el error para que no solo disminuya hasta el cero.

export const setContador = (valueInit = 0) => {
  const [contador,setContador] = useState(valueInit)
  
  const incrementar = (value = 1) =>{
    setContador(contador + value)
  }
  const decrementar = (value = 1) =>{
    setContador(contador - value)
  }
  const resetear = () =>{
    setContador(0)
  }

  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}