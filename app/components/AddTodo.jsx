import React from 'react';

class AddTodo extends React.Component {

  handleSubmit = (e) =>{
    e.preventDefault();
    var todo = this.refs.todoText.value;
    if(todo.length > 0){
      this.refs.todoText.value = '';
      this.props.handleAddTodo(todo);
    }else{
      this.refs.todoText.focus();
    }
  }
  render(){
    return (
      <div className='container__footer'>
        <form ref='form' onSubmit={this.handleSubmit} className='add-todo-form'>
          <input type='text' ref='todoText' placeholder='What do you want to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  handleAddTodo: React.PropTypes.func.isRequired
};

module.exports = AddTodo;
