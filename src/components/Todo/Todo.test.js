import React from 'react';
import { mount } from 'enzyme';
import Todo from './Todo';

describe('<Todo />', () => {
  // it('deberia recibir como props el "title" del todo', () => {
  //   const title = 'escuchar musica';
  //   const wrapper =  mount(<Todo title={title} />);
  //   expect(wrapper.prop('title')).toBe(title);
  // });
  
  // it('deberia renderizar un "div" que contenga el "title" que recibe por props', () => {
  //   const title = 'escuchar musica';
  //   const wrapper =  mount(<Todo title={title} />);
  //   expect(wrapper.contains({title})).toEqual(true);
  // });

  let wrapper;
  let title;
  beforeEach(() => {
    title = 'escuchar musica';
    wrapper =  mount(<Todo title={title} />)
  });

  it('deberia recibir como props el "title" del todo', () => {
    expect(wrapper.prop('title')).toBe(title);
  });

  it('deberia renderizar un "div" que contenga el "title" que recibe por props', () => {
    expect(wrapper.contains({title})).toEqual(true)
  });
  
});