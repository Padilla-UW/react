import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        description: 'Obtener la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Obtener la piedra del alma',
        done: false,
    }];

    

    const [todos, dispatch] = useReducer(todoReducer, initialState)


  return (
    <>
        <h1>TodoApp</h1>
        <hr />

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </>
  )
}
