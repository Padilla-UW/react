import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['one punch','Dragon']);

    const onAddCategory = (value) =>{
        if(categories.includes(value))return;
        setCategories([...categories,value]);
    }

    return(
        <>
        <h1>GifExpert</h1>
        <AddCategory onNewCategory = {onAddCategory}/>

        <ol>
            { categories.map(category => {
                return <li key={category}>{category}</li>
            })}
        </ol>
        </>
    )
}

// QyeV9UbGybnRfIRFeypCykiIPIdwqADg APIKEY