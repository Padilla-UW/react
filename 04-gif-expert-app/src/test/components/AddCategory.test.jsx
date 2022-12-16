import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe('Pruebas de <AddCategory/>', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Saitama'}});
        expect(input.value).toBe('Saitama');

     })
})