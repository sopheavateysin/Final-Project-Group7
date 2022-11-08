


class taskManager {
    constructor(currentId){
        this.tasks = [];
        this.currentId = currentId;
    
} 

addTask(name, description, assignedTo, dueDate, status = 'TO DO'){
    const task ={
    name,
    description,
    assignedTo,
    dueDate,
    status,
    id: ++this.currentId
    }
    
    this.tasks.push(task);
    return task;

}
}


