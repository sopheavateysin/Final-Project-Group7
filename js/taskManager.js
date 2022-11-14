const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
 const html = `<li class="row">
 <div class="card" style="width: 48%;">
     <div class=" card-body">
         <h5 class="card-title px-2">${name}Task 1 <span class="badge bg-danger my-2">${status}To Do</span></h5>
         <h6 class="card-subtitle mb-3 px-2 text-muted">${description}: Working on Wireframe</h6>
         <h6 class="card-subtitle mb-3 px-2 text-muted">${assignedTo}: Sophia</h6>
         <h6 class="card-subtitle mb-3 px-2 text-muted">${dueDate}: 10/10/2022</h6>
         <div class="card-footer text-right">
             <button type="button" class="btn btn-outline-success">Mark as Done</button>
             <button type="button" class="btn btn-outline-danger">Delete</button>
         </div>
     </div>
 </div>
</li>`

return html;
}


class taskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    
} 

addTask(name, description, assignedTo, dueDate){
    const task = {
    id: this.currentId++,
    name: name,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    status: 'TO DO'
    }
    
    this.tasks.push(task);

}

render() {
let taskHtmlList =this.task;
for (let currentTask = 0; currentTask<taskHtmlList.length; currentTask++){
    let liveTask=taskHtmlList[currentTask];
    let liveDate = new Date(liveTask.dueDate)
    let formattedDate = liveDate.toLocalDateString();
    let taskHtml = createTaskHtml(name, description, assignedTo, dueDate,status, formattedDate)
        taskHtmlList.push(taskHtml);
    }
    let tasksHtml = taskHtmlList.join('\n');
    

}

}


