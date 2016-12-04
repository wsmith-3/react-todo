import React from 'react';
import uuid from 'node-uuid';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

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
          completed: false
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
      }
      return todo;
    })
    this.setState({todos: updatedTodos})
  }
  render(){
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo handleAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

module.exports = TodoApp;
