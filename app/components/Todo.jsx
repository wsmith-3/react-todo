import React from 'react';
import moment from 'moment';

class Todo extends React.Component {

  render(){
    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do Y @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={()=>{
          this.props.onToggle(id);
        }}>
        <div>
          <input type='checkbox' checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    )
  }
}

module.exports = Todo;
