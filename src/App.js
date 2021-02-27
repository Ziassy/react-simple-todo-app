import React, { Component } from 'react'

import Todos from './component/Todos'

export default class App extends Component {
    state = {
    todos: [
      {
        id: 1,
        title: 'Dinner with husband',
        completed: false

      },
      {
        id: 2,
        title: 'Take out the trash',
        completed: true

      },
      {
        id: 3,
        title: 'Deadline chat app',
        completed: false

      },
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({ todo: this.state.todos.map((todoData) => {
      if(todoData.id === id ) {
        todoData.completed = !todoData.completed
      }
      return todoData
    })})
  }

  render() {
    return (
      <div>
        <Todos propsTodos={this.state.todos} propsMarkCompleteApp={this.markComplete}/>
      </div>
    )
  }
}