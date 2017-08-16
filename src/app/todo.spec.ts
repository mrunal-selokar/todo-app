import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor',()=>{
    let todo = new Todo({
      title: 'Test',
      complete: true
    });
    expect(todo.title).toEqual('Test');
    expect(todo.complete).toEqual(true);
  });
});
