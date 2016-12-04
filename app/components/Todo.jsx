import React from 'react';
import moment from 'moment';

class Todo extends React.Component {

  render(){
    var {text, id, completed, createdAt, completedAt} = this.props;
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
      <div onClick={()=>{
          this.props.onToggle(id);
        }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

module.exports = Todo;
