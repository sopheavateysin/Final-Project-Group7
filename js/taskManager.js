//This is the skeleton for every new task card

const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    const html = `<li class="row" Task Number: ${id}>
 <div class="card" style="width: 48%">
     <div class=" card-body">
         <h5 class="card-title px-2">What: ${name}<span class="badge bg-danger my-2">${status}</span></h5>
         <h6 class="card-subtitle mb-3 px-2 text-muted">Why: ${description} </h6>
         <h6 class="card-subtitle mb-3 px-2 text-muted">Who: ${assignedTo} </h6>
         <h6 class="card-subtitle mb-3 px-2 text-muted">When: ${dueDate} </h6>
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
            let formattedDate = liveDate.toTimeString();
            //  console.log(formattedDate)
            let taskHtml = createTaskHtml(liveTask.name, liveTask.description, liveTask.assignedTo, liveTask.formattedDate, liveTask.status, liveTask.id)
            taskHtmlList.push(taskHtml);
            // console.log(taskHtmlList)
        }
        let taskHtml = taskHtmlList.join('\n');
        console.log(taskHtml)
        return taskHtml;

    }

    getTaskById(taskId) {
        let foundTask;
        for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
            if (taskId === this.currentId) {
                foundTask = this.tasks[taskNumber];
            }
        }
        return foundTask;

    }


}


export {taskManager};