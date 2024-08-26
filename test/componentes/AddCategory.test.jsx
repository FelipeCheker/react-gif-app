 import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
 
 describe('Pruebas en AddCategory.jsx', () => { 
    
     
     test('debe de cambiar el valor de la caja de texto', () => { 
         
         render (<AddCategory onNewCategory={ () => {}}/>)
         
         const input = screen.getByRole('textbox');
         
         fireEvent.input( input, { target: { value: 'Star Wars'} } )
         
         expect( input.value).toBe('Star Wars')
         //screen.debug()
        })
        
        test('Debe de llamar a onNewCategory si el input tiene un valor', () => { 
            
            const inputValue = "Star Wars";
            const onNewCategory = jest.fn();
            render (<AddCategory onNewCategory={ onNewCategory }/>);
            
            const form = screen.getByRole('form');
            const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );
         
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

      });

      test('No debe de llamar el onNewCategory si el input esta vacio', () => { 
        
        const onNewCategory = jest.fn();
        render (<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );
         
        expect(onNewCategory).not.toHaveBeenCalled();
       });

  })