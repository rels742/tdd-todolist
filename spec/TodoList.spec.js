const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      isComplete: false
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all todo items", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("turn the heating on!")
    todoList.create("make dinner")
    todoList.create("reply to messages")
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        isComplete: false
      },
      {
        id: 2,
        text: "make dinner",
        isComplete: false
      },
      {
        id: 3,
        text: "reply to messages",
        isComplete: false
      },

    ]
    // execute
    const result = todoList.getAllTodos()
    
    // verify
    expect(result).toEqual(expected)
  })
  
  it("sets a todo completed by its ID", () => {
    // set up
    
    // execute
    const result = todoList.completedById()
    
    // verify
  })
  
})
