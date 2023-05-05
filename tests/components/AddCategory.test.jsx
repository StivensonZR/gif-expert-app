
import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe('pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {


        render(<AddCategory onNewCategory={() => { }} />)

            const input = screen.getByRole('textbox')

            fireEvent.input(input, { target: { value: 'Saitama' } })

        expect(input.value).toBe('Saitama')
        //screen.debug();
    });


    test('debe de llamar onNeCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        //screen.debug()
        expect(input.value).toBe('')
        //se evalua si fue llamada la funcion
        expect(onNewCategory).toHaveBeenCalled()
        //se evalua si fue llamada la funcion con el valor de saitama en el input
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    });


    test('no debe de llamar el onNewCategory si el input esta vacio', ( ) => {

        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect( onNewCategory ).toHaveBeenCalledTimes(0)
    });



});
