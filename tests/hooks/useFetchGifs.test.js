
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('pruebas en el hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
       
        const { result } = renderHook( () => useFetchGifs('One punch') )
        const { images, isLoading } = result.current

        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy()    
    });

    test('debe de retornar un array de imgs y el isLoading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One punch') )
       
        // espera a que result.images.current.length sea mayor a 0
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()    
    });
    
    
});
