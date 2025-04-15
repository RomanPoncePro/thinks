import '../styles/ContadorComponents.css'
import {setContador} from './Hooks/setContador'

export const ContadorComponents = () => {
  const {contador,incrementar,decrementar,resetear} = setContador()

  return(
  <>
  <h1>Contador : {contador}</h1>
  <button className="btn btn-success" onClick={()=>{incrementar()}}>+1</button>
  <button className="btn btn-danger" onClick={()=>{resetear()}}>reset</button>
  <button className="btn btn-warning" onClick={()=>{decrementar()}}>-1</button>
  </>)
}