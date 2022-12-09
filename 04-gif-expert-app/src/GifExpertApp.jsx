import { useState } from "react"

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['one punch','Dragon']);
    return(
        <>
        <h1>GifExpert</h1>

        <ol>
            { categories.map(category => {
                return <li key={category}>{category}</li>
            })}
        </ol>
        </>
    )
}

// QyeV9UbGybnRfIRFeypCykiIPIdwqADg APIKEY