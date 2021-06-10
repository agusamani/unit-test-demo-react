import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

import './AddTodo.css';

export function AddTodo(props) {
  const [input, setInput] = React.useState({
    title: '',
    description: '',
    place: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input);
    setInput({
      title: '',
      description: '',
      place: '',
      date: ''
    })
  }

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <label htmlFor="title">Title</label>
      <input type="text" id="name" name="title" onChange={handleInputChange} value={input.title} autoComplete="off" />
      <label onChange={handleInputChange} htmlFor="description">Description</label>
      <textarea onChange={handleInputChange} value={input.description} name="description" rows={3} autoComplete="off"></textarea>
      <label htmlFor="place">Place</label>
      <input onChange={handleInputChange} value={input.place} name="place" autoComplete="off" />
      <label htmlFor="date">Date</label>
      <input onChange={handleInputChange} value={input.date} name="date" type="text" autoComplete="off" />
      <button type="submit">Add</button>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo
}
export default connect(null,mapDispatchToProps)(AddTodo);