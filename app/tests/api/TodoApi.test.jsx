import expect from 'expect';
import TodoApi from 'TodoApi';

describe('TodoApi', () => {
  beforeEach(()=>{
    localStorage.removeItem('todos');
  })
  it('should exist', () => {
    expect(TodoApi).toExist();
  });
  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoApi.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a:'b'};
      TodoApi.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () =>{
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in storage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual(todos);
    })
  });

  describe('filterTodos', () => {
    var todos = [{
        id: 1,
        text: 'some text here',
        completed: true
      },
      {
        id: 2,
        text: 'other text here',
        completed: false
      },
      {
        id: 3,
        text: 'some text here',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoApi.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return all items if showCompleted is false', () => {
      var filterTodos = TodoApi.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filterTodos = TodoApi.filterTodos(todos, true, '');
      expect(filterTodos[0].completed).toBe(false);
    })

    it('should filter Todos by searchText', () => {
      var filterTodos = TodoApi.filterTodos(todos, true, 'some');
      expect(filterTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', () => {
      var filterTodos = TodoApi.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });
  });
});
