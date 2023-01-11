import { useEffect } from "react";
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Obtener la piedra del alma',
        done: false,
    }, */


];

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    } 

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 5</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">

                {
                    <TodoList todos={todos} onDeleteTodo = {handleDeleteTodo}/>
                }
                
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    {<TodoAdd onNewTodo={handleNewTodo} 
                              />}
                </div>
            </div>
    </>
  )
}
