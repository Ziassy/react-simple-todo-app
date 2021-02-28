import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodos extends Component {
  state = {
    title: '',
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    // buat clear apapun yang udah kita tulis
    this.setState({ title: '' });
  };

  // method
  // menggunakan bracket untuk taget value nya in case kamu buat form yang isisnya email dan password gitu
  changeTodo = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form onSubmit={this.submitTodo} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add todo..'
          // untuk mengambil value
          value={this.state.title}
          // mengubah value
          onChange={this.changeTodo}
          style={{ flex: '10', padding: '5px' }}
        />
        <button className='btn' style={{ flex: '1' }}>
          Add Todo
        </button>
      </form>
    );
  }
}

AddTodos.propTypes = {
  AddTodo: PropTypes.func,
};
