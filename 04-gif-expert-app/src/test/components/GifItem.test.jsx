import { render } from "@testing-library/react"
import { GifItem } from "../../components"

describe('Pruebas en GifItem',()=>{
    const title = 'one punch';
    const url = 'http://one-punch.com';

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem 
            title={title}
            url={url}  
          />)
          expect(container).toMatchSnapshot();
    })
})