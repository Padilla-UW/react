import React from "react";
import  {createRoot} from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { HelloWordApp } from "./HelloWordApp";
import './style.css';


function App(){
    return (<h1>Hola mundo</h1>);
}


const root =  createRoot(document.getElementById('root'));
root.render(
        <CounterApp value={10}/>
    );