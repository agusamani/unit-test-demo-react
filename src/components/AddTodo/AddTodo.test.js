import React from 'react';
import { mount } from 'enzyme';
import AddTodo from './AddTodo.js';
import configureStore from "redux-mock-store";

describe('<AddTodo />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeAll(() => {
      const mockStore = configureStore();
      const store = mockStore([]);
      wrapper = mount(<AddTodo store={store} />);
    })
    it('Renderiza un <form>', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    })

    it('Renderiza un label con el texto igual a "Title"', () => {
      expect(wrapper.find('label').at(0).text()).toEqual('Title');
    })

    it('Renderiza un input con la propiedad "name" igual a "title"', () => {
      expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    })

    it('Renderiza un label con el texto igual a "Description"', () => {
      expect(wrapper.find('label').at(1).text()).toEqual('Description');
    })

    it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
      expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
    })

    it('Renderiza un label con el texto igual a "Place"', () => {
      expect(wrapper.find('label').at(2).text()).toEqual('Place');
    })

    it('Renderiza un input con la propiedad "name" igual a "place"', () => {
      expect(wrapper.find('input[name="place"]')).toHaveLength(1);
    })

    it('Renderiza un label con el texto igual a "Date"', () => {
      expect(wrapper.find('label').at(3).text()).toEqual('Date');
    })

    it('Renderiza un input con la propiedad "name" igual a "date"', () => {
      expect(wrapper.find('input[name="date"]')).toHaveLength(1);
    })
    
    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
    })
  })

  describe('Manejo de inputs con estado', () => {
    let wrapper, useState, useStateSpy;
    beforeEach(() => {
        useState = jest.fn();
        useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, useState]);
        const mockStore = configureStore();
        const store = mockStore([]);
        wrapper = mount(<AddTodo store={store} />);
    });

    describe("Title input", () => {

      it('El form deberia cambiar de estado cuando escriban en el input de title', () => {
        wrapper.find('input[name="title"]').simulate('change', {target: {name: 'title', value: 'My new value'}});
        expect(useState).toHaveBeenCalledWith({"title": "My new value", "description": "", "place": "", "date": ""});
      });
    });

    describe("Description input", () => {
      it('deberia cambiar de estado cuando escriban en el input de "description"', () => {
        wrapper.find('textarea[name="description"]').simulate('change', {target: {name: 'description', value: 'salir a escuchar musica'}});
        expect(useState).toHaveBeenCalledWith({"title": "", "description": "salir a escuchar musica", "place": "", "date": ""});
      });
    });

    describe("Place input", () => {
      it('deberia cambiar de estado cuando escriban en el input de "place"', () => {
        wrapper.find('input[name="place"]').simulate('change', {target: {name: 'place', value: 'London'}});
        expect(useState).toHaveBeenCalledWith({"title": "", "description": "", "place": "London", "date": ""});
      });
    });

    describe("Date input", () => {
      it('deberia cambiar de estado cuando escriban en el input de "date"', () => {
        wrapper.find('input[name="date"]').simulate('change', {target: {name: 'date', value: 'mañana'}});
        expect(useState).toHaveBeenCalledWith({"title": "", "description": "", "place": "", "date": "mañana"})
      });
    });
  });
});