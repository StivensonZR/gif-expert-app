
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('pruebas en <GifItem />', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="card"
  >
    <img
      alt="Saitama"
      src="https://one-punch.com/saitama.jpg"
    />
    <p>
      Saitama
    </p>
  </div>
</div>
`)

    });


    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url }  /> )
        //screen.debug()
        //expect( screen.getByRrole('img').src ).toBe( url )
    
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( alt )
    });

    test('debe mostrar el titulo del componente', () => {
        
        render( <GifItem title={ title } url={ url }  /> )
        expect( screen.getByText( title ) ).toBeTruthy()

    });
    
    
});
