import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en GifGrid.jsx', () => { 
    
    const category = 'Star wars';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));

     });

     test('Debe de mostrar items cuando se cargan las imagenes desde el useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'SW',
            url: 'https://localhosts/sw.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect( screen.getAllByRole('img').length).toBe(1);
      });

 })