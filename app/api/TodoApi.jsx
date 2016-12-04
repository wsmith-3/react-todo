import $ from 'jQuery';

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    }catch(e){

    }

    return $.isArray(todos) ? todos : [];

    // if($.isArray(todos)){
    //   return todos;
    // }else{
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filterTodos = todos;

    filterTodos = filterTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    filterTodos.sort((a, b)=>{
      if(a.completed === false && b.completed){
        return -1;
      }else if (a.completed && !b.completed){
        return 1;
      }else{
        return 0
      }
    });

    filterTodos = filterTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    return filterTodos;
  }
}
