import { GifItem } from "../../src/components/GifItem"
import { render, screen } from '@testing-library/react';



describe('Test en gifItem', () => { 

    const title = 'Titulo';
    const url = 'https://url.com/feli'
    const alt = 'indicador'

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render( 
            <GifItem
            title = {title}
            url = {url}
            />
        );
        expect (container).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( 
            <GifItem
            title = {title}
            url = {url}
            />
        );
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
     })

     test('Debe mostrar el titulo en el componente', () => { 
        render( 
            <GifItem
            title = {title}
            url = {url}
            />
        );
        expect(screen.getByText(title)).toBeTruthy();
      })

 })
