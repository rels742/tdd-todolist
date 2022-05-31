
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

    completeById(id) {
        //find to do item with matching id
        let foundToDoItem = false
        for(let i = 0; i < this.todoItems.length; i++) {
            let currentToDo = this.todoItems[i]
            if(currentToDo.id === id ) {
                foundToDoItem = currentToDo // We have found the todo that we are looking for
            }
        }
        //if we find it, we set isComplete to true
        if(foundToDoItem !== false) {
            foundToDoItem.isComplete = true
        }
        // console.log('trying to complete to do with ID', id, foundToDoItem)
        
        //return the do item we have found
        return foundToDoItem
    }
   
}

module.exports = TodoList
