import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Todos from './component/Todos';
import Header from './component/layout/Header';
import AddTodo from './component/AddTodos';
import About from './component/pages/About';

import './App.css';
export default class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Dinner with husband',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deadline chat app',
        completed: false,
      },
    ],
  };

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todo: this.state.todos.map((todoData) => {
        if (todoData.id === id) {
          todoData.completed = !todoData.completed;
        }
        return todoData;
      }),
    });
  };

  // delete todo
  delTodo = (id) => {
    // console.log(id)
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // add todo
  AddTodo = (title) => {
    // new todo variabel
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    // we have to use spread operator
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo} />
                  <Todos
                    propsTodos={this.state.todos}
                    propsMarkCompleteApp={this.markComplete}
                    propsDelTodoFromAppJs={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
