
class TodoList {
    constructor() {
        this.nextId = 1
        this.todoItems = []
    }

    create(toDoName) {
        const newListItem = {
            id: this.nextId,
            text: toDoName,
            isComplete: false
        }
        this.nextId ++ // increment ID to ensure new list item has a unique ID

        this.todoItems.push(newListItem)

        return newListItem 
    }

    getAllTodos() {
        return this.todoItems
    }
   
}

module.exports = TodoList
