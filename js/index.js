//our instantiated class is below so that we can access this class' methods
// this is a node js
//import { taskManager } from "./taskManager";
const example = new taskManager(0);


const form = document.querySelector('#form');
const newTaskNameInput = document.querySelector('#exampleInputtaskname');
const newTaskDescription = document.querySelector('#exampleFormControlTextarea1');
const newAssignedTo = document.querySelector('#exampleInputassignedto');
const newDueDate = document.querySelector('#exampleInputduedate');
const newTask = document.getElementsByClassName('row');
//This variable below encapuslates the html part where tasks will be rendered to the javascript
const tasksList = document.getElementById("tasksRow");
const tasksListChild = document.getElementById('child');
//load the cards using local storage
example.load();
const taskHtml = example.render();
tasksList.innerHTML = taskHtml;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validFormFieldInput();
    // example.addTask();

});


function validFormFieldInput(data) {

    const name = newTaskNameInput.value.trim();
    const description = newTaskDescription.value.trim();
    const assignedTo = newAssignedTo.value.trim();
    const dueDate = newDueDate.value;


    if (name === '') {
        alert('Please enter task name!');
    } else if (description === '') {
        alert('Please enter task description');
    } else if (assignedTo === '') {
        alert('Please fill out "Assigned to" box');
    } else if (dueDate === '') {
        alert('Please enter due date');
    } else {
        //this method stores the user's input for the render function/method
        example.addTask(name, description, assignedTo, dueDate);

        // console.log(example.tasks)

        // the variable encapsulates the render method so that we can assign it to the corresponding HTML element
        //the following code will also work: tasksList.innerHTML = (example.render());
        //however, how it is below is cleaner. 
        const taskHtml = example.render();
        tasksList.innerHTML = (taskHtml);

    }
}


function onError(input, message) {
    const parent = input.parentElement;
    const messageErr = parent.querySelector('#alert');
    messageErr.style.visibility = 'visible';
    messageErr.innerText = message;
}


//console.log(createTaskHtml);
//console.log(example.tasks);
//const task1 = example.addTask('Group 7', 'working on JavaScript', 'Sophia', '11/08/2022')
//console.log(task1);
//console.log(example);
//console.log(example.getTaskById(0));


// task 7 step 2 :Adding an Event Listener to the task list
tasksList.addEventListener('click', (event) => {
    let parentTask = 'row';
    let taskId = event.target.closest('.row').getAttribute('TaskNumber'); //example.id;
    console.log(taskId);
    // console.log(chose);
    console.log(event.target.classList, parentTask)
    //event.target.classlist is object AND cannot compare directly to strin
    if (event.target.classList.contains('btn-outline-success')) {
        console.log("success");
        example.status = 'done';
        let task = example.getTaskById(taskId);

        return task;
        //   console.log(task);
        //need to make sure data-attribute and id are same data type...

        //else if delete button pressed, delete task
        //run the save method to update the task in the memory
    } else {
        console.error("try again");

    }
})
console.log(tasksList);
