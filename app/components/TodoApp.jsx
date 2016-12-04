import React from 'react';
import uuid from 'node-uuid';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';
import moment from 'moment';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    };
  }
  componentDidUpdate = () => {
    TodoApi.setTodos(this.state.todos);
  }
  handleAddTodo = (text) => {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
  handleToggle = (id) => {
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    })
    this.setState({todos: updatedTodos})
  }
  render(){
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
              <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;
