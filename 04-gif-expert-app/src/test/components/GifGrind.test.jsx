import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrind/>', () => { 

    const category = 'One punch';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     })

     test('Debe de traer los gifs', () => { 
        const gifs = [
            { id: 'abc',
              title: 'saitama',
              url: 'http://saitama.com/saitama.jpg'
            },
            { id: 'a123',
              title: 'goku',
              url: 'http://goku.com/goku.jpg'
            },
            ] 

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      })

 })