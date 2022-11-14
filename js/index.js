const example = new taskManager(0);

const form = document.querySelector('#form');
const newTaskNameInput = document.querySelector('#exampleInputtaskname');
const newTaskDescription = document.querySelector('#exampleFormControlTextarea1');
const newAssignedTo = document.querySelector('#exampleInputassignedto');   
const newDueDate = document.querySelector('#exampleInputduedate');
const newTask = document.getElementsByClassName('row');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validFormFieldInput();
    
    
});




function validFormFieldInput (data) {
    
    const name = newTaskNameInput.value.trim();
    const description = newTaskDescription.value.trim();
    const assignedTo = newAssignedTo.value.trim();
    const dueDate = newDueDate.value.trim();


    if (name === '') {
        alert('Please enter task name!'); 
        } else if (description === '') {
        alert('Please enter task description');
        } else if (assignedTo === '') {
        alert('Please fill out "Assigned to" box');
        } else if (dueDate === ''){
        alert('Please enter due date');
        } else {
            
            example.addTask(name, description, assignedTo, dueDate);
            
            console.log(example.tasks)
        }
}


function onError (input, message){
    const parent = input.parentElement;
    const messageErr = parent.querySelector('#alert');
        messageErr.style.visibility = 'visible';
        messageErr.innerText = message;
}


console.log(creatTaskHtml);
//console.log(example.tasks);
//const task1 = example.addTask('Group 7', 'working on JavaScript', 'Sophia', '11/08/2022')
//console.log(task1);
//console.log(example);


