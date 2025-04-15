import { useState, useEffect } from "react"; 

export const useFetch = (url) => {

  const [estado , setEstado] = useState({
    data:null,
    isLoading:true,
    errors:null
  })
   
  const getFetch = async () => {
    // En caso de que no haya url salimos
    if(!url) return
    try{
      const response = await fetch(url)
      const data = await response.json()
      setEstado({
        data,
        isLoading:false,
        errors:null
      })
    }catch(error){
      setEstado({
        data:null,
        isLoading:true,
        errors:error
      })
    }
  }

  useEffect(() => { 
    getFetch() 
  },[url])

  return estado

}

