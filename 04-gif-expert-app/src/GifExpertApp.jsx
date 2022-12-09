import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['one punch','Dragon']);

    const onAddCategory = () =>{
        setCategories([...categories,'Valorant']);
    }

    return(
        <>
        <h1>GifExpert</h1>
        <AddCategory/>
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map(category => {
                return <li key={category}>{category}</li>
            })}
        </ol>
        </>
    )
}

// QyeV9UbGybnRfIRFeypCykiIPIdwqADg APIKEY