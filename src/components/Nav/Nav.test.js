import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  })

  it('Deberia renderizar Dos <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });

  it('El primer Link debe tener el texto "TODOS" y cambiar la ruta hacia "/".', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
    expect(wrapper.find(Link).at(0).text()).toEqual('TODOS');
  });
  
  it('El segundo Link debe tener el texto "Add Todo" y cambiar la ruta hacia "/add"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/add');
    expect(wrapper.find(Link).at(1).text()).toEqual('Add Todo');
  });
})