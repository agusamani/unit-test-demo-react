import { addTodo, removeTodo, toInProgress, toDone } from './index.js';

describe('Action Creators', () => {
  it('Debería retornar una action con las propiedades type "AddTodo" y payload: Este contiene lo que recibe como argumento la funcion ademas del status "Todo" y un id que comienza con el valor 1', () => {
    const payload = { title: 'ejercicio' };
    expect(addTodo(payload)).toEqual({
      type: 'addTodo',
      payload: {
        title: 'ejercicio',
        status: 'Todo',
        id: 1
      }
    })
  });
  it('Debería retornar una action con las propiedades type "RemoveTodo" y payload, su valor lo recibe por argumento:', () => {
    expect(removeTodo(2)).toEqual({
      type: 'removeTodo',
      payload: 2
    })
  })
  it('Debería retornar una action con las propiedades type "ToInProgress" y payload, su valor lo recibe por argumento:', () => {
    expect(toInProgress(3)).toEqual({
      type: 'toInProgress',
      payload: 3
    })
  })
  it('Debería retornar una action con la propiedad type "ToDone" y el payload, su valor lo recibe por argumento:', () => {
    expect(toDone(4)).toEqual({
      type: 'toDone',
      payload: 4
    })
  })
})