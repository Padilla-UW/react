import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components"

describe('Pruebas en GifItem',()=>{
    const title = 'one punch';
    const url = 'http://one-punch.com/img.jpg';

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem 
            title={title}
            url={url}  
          />)
          expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el url y alt asignados', () => {
        render(<GifItem 
            title={title}
            url={url}  
          />);

        const { src, alt } = screen.getByRole('img');
        //expect(screen.getByRole('img').src).toBe(url);
        expect(src).toBe(url);
        expect(alt).toBe(title);    

     });

     test('Debe de agregar el titulo de la imagen',()=>{
        render(<GifItem 
            title={title}
            url={url}  
          />);
        expect(screen.getByText(title)).toBeTruthy();
     })
})