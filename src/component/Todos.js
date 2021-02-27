import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

export default class Todos extends Component {

  render() {
    // looping array todos buat nampilin di browser
    return this.props.propsTodos.map((dataTodos) => (
      // console.log(dataTodos)
      <TodoItem key={dataTodos.id} propsTodosItem={dataTodos} 
      propsMarkCompleteTodos={this.props.propsMarkCompleteApp}/>
    ))
  }
}

Todos.propTypes = {
  propsTodos: PropTypes.array.isRequired
}