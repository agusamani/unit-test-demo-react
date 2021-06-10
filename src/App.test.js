import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { App } from './App.js';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import EditTodo from './components/EditTodo/EditTodo';

import Nav from './components/Nav/Nav';

describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  it('El componente Home y Nav deben renderizar en la ruta /', () => {
    const wrapper = mount(
        <Provider store={store}>
        <MemoryRouter initialEntries={[ '/' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(Nav)).toHaveLength(1);
      expect(wrapper.find(AddTodo)).toHaveLength(0);
      expect(wrapper.find(EditTodo)).toHaveLength(0);
  });

  it('El componente Add en nav deben renderizar en la ruta /add', () => {
    const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/add' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );
    expect(container.find(Nav)).toHaveLength(1);
    expect(container.find(Home)).toHaveLength(0);
    expect(container.find(AddTodo)).toHaveLength(1);
    expect(container.find(EditTodo)).toHaveLength(0);
  });

  it('El componente Edit en Nav deben renderizar en la ruta /edit/:id', () => {
    const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/edit/1' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );
    expect(container.find(Nav)).toHaveLength(1);
    expect(container.find(Home)).toHaveLength(0);
    expect(container.find(AddTodo)).toHaveLength(0);
    expect(container.find(EditTodo)).toHaveLength(1);
  });

});