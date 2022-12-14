import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username : 'HPadilla',
        email: 'hector.padilla@uwipes.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target})=>{
        const {name,value} = target;
        setFormState({...formState, 
            [name]:value});
    }

    useEffect(() => {
     //console.log('Cambio el formulario');
    }, [formState])
    
    useEffect(() => {
     //console.log('Cambio el correo');
    }, [email])
    

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />
        <input  type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
        
        <input  type="email" 
                className="form-control mt-2"
                placeholder="hector.padilla@uwipes.com"
                name="email"
                value={email}
                onChange={onInputChange} />

        { 
          (username == 'HPadilla2')&&<Message/> 
        }
      
      

    </>
  )
}
