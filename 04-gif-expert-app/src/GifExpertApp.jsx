import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrind";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (value) =>{
        if(categories.includes(value))return;
        setCategories([...categories,value]);
    }

    return(
        <>
        <h1>GifExpert</h1>
        <AddCategory onNewCategory = {onAddCategory}/>


        { categories.map(category => 
                <GifGrid 
                key={category} 
                category = {category} />
        )}
  
        </>
    )
}

// QyeV9UbGybnRfIRFeypCykiIPIdwqADg APIKEY