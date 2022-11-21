//This is the skeleton for every new task card

const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    const html = `<li class="row" TaskNumber=' ${id}'>
 <div class="card" style="width: 48%">
     <div class=" card-body">
         <h5 class="card-title px-2">${name}<span class="badge bg-danger my-2">${status}</span></h5>
         <h6 class="card-subtitle mb-3 px-2 text-muted">Description: ${description} </h6>
         <h6 class="card-subtitle mb-3 px-2 text-muted">Assigned To: ${assignedTo} </h6>
         <h6 class="card-subtitle mb-3 px-2 text-muted">Due Date: ${dueDate} </h6>
         <div class="card-footer text-right">
             <button type="button" class="btn btn-outline-success">Mark as Done</button>
             <button type="button" class="btn btn-outline-danger">Delete</button>
            
         </div>
     </div>
 </div>
</li>`

    return html;
}

//The class below is akin to a factory function for task cards
//The constructor consists of two properties, an array of all tasks and their respective id numbers
class taskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;

    }

    //This is a function to add a task to the constructor's task array
    addTask(name, description, assignedTo, dueDate) {
        //  console.log('Adding task')
        const task = {
            id: this.currentId++,
            name,
            description,
            assignedTo,
            dueDate,
            status: 'TO DO'
        }

        this.tasks.push(task);

    }
    //This function below renders the above code to the DOM/browser
    //  essentially, it is like a shadow of the above code and it will
    render() {
        let taskHtmlList = [];
        for (let currentTask = 0; currentTask < this.tasks.length; currentTask++) {
            let liveTask = this.tasks[currentTask];
            // console.log(liveTask)
            // let date = new Date();
            // date.setTime(Date.parse(liveTask.dueDate));
            let liveDate = new Date(liveTask.dueDate);
            //console.log(liveDate)
            let formattedDate = liveDate.toLocaleDateString();
            //  console.log(formattedDate)
            let taskHtml = createTaskHtml(liveTask.name, liveTask.description, liveTask.assignedTo, liveTask.formattedDate, liveTask.status, liveTask.formattedDate, liveTask.id)
            taskHtmlList.push(taskHtml);
            // console.log(taskHtmlList)
        }
        let taskHtml = taskHtmlList.join('\n');
        console.log(taskHtml)
        return taskHtml;

    }

    getTaskById(taskId) {
        let foundTask;
        // for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
        ///   if (taskId === this.currentId) {
        //     foundTask = this.tasks[taskNumber];
        //  }
        //}
        return this.tasks[taskId];

    }

    save() {
        // Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);

        // Store the JSON string in localStorage
        localStorage.setItem('tasks', tasksJson);

        // Convert the currentId to a string;
        const currentId = String(this.currentId);

        // Store the currentId in localStorage
        localStorage.setItem('currentId', currentId);
    }

    load() {

        if (localStorage.getItem('tasks')) {
   
            const tasksJson = localStorage.getItem('tasks');

            this.tasks = JSON.parse(tasksJson);
        }

 
        if (localStorage.getItem('currentId')) {
       
            const currentId = localStorage.getItem('currentId');

            this.currentId = Number(currentId);
        }


    

}
 
}


//export {taskManager};