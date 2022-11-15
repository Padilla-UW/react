const newMensaje = () =>{
    return 'Hola';
} 
    

export const FirstApp = (props) => {
    return (
        <>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        
        </>
    );
}