
import { mount, shallow, render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en GifExpertApp', () => {

    test('debe añadir la nueva categoria ingresada en el input a la lista de categorias', () => {
        
        const wrapper = mount(<GifExpertApp />);
        const input = wrapper.find('input');
        const button = wrapper.find('button');
        input.simulate('change', { target: { value: 'dogs' } });
        button.simulate('click');
        expect(wrapper.find('GifGrid').length).toEqual(1);

    });


/*     // Tests that the function does not add an empty or whitespace-only category to the list of categories. tags: [edge case]
    test('test_input_validation', () => {
        const wrapper = mount(<GifExpertApp />);
        const input = wrapper.find('input');
        const button = wrapper.find('button');
        input.simulate('change', { target: { value: '   ' } });
        button.simulate('click');
        expect(wrapper.find('GifGrid').length).toEqual(0);
    });

    // Tests that the function does not add a category that already exists in the list of categories. tags: [happy path]
    test("test_duplicate_category", () => {
        const wrapper = shallow(<GifExpertApp />);
        const addButton = wrapper.find('AddCategory').dive().find('button');
        const input = wrapper.find('AddCategory').dive().find('input');
        input.simulate('change', { target: { value: 'cats' } });
        addButton.simulate('click');
        input.simulate('change', { target: { value: 'cats' } });
        addButton.simulate('click');
        expect(wrapper.find('GifGrid').length).toBe(1);
    });
 */
});
