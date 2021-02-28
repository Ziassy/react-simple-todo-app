import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import Todos from './component/Todos';
import Header from './component/layout/Header';
import AddTodo from './component/AddTodos';
import About from './component/pages/About';

import './App.css';
export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then((res) => {
        this.setState({ todos: res.data });
      });
  }

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  // add todo
  AddTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        complete: false, // saat memasukan todo baru kita akan set dia false
      })
      .then((res) => {
        // we have to use spread operator
        this.setState({ todos: [...this.state.todos, res.data] });
      });
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
