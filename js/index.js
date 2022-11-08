

const form = document.querySelector('#form');
const newTaskNameInput = document.querySelector('#exampleInputtaskname');
const newTaskDescription = document.querySelector('#exampleFormControlTextarea1');
const newAssignedTo = document.querySelector('#exampleInputassignedto');   
const newDueDate = document.querySelector('#exampleInputduedate');
form.addEventListener('click', (e) => {
    e.preventDefault();
    validFormFieldInput();
    
    
});




function validFormFieldInput (data) {
    
    const name = newTaskNameInput.value.trim();
    const description = newTaskDescription.value.trim();
    const assignedTo = newAssignedTo.value.trim();
    const dueDate = newDueDate.value.trim();


    if (name === '') {
        onError (newTaskNameInput, 'Please enter task name!'); 
    }else {
        onSuccess(newTaskNameInput);
    }
    if (description === '') {
        onError(newTaskDescription, 'Please enter task description');
    } else {
        onSuccess(newTaskDescription);
    }
    if (assignedTo === '') {
        onError (newAssignedTo, 'Please fill out "Assigned to" box');
    } else {
        onSuccess (newAssignedTo);
    }
    if (dueDate === ''){
        onError (newDueDate, 'Please enter due date');
    } else {
        onSuccess (newDueDate);
    }
}

function onSuccess (input){
    const parent = input.parentElement;
    const messageErr = parent.querySelector('#alert');
    messageErr.style.visibility = 'hidden';
    messageErr.innerText = '';
    
}

function onError (input, message){
    const parent = input.parentElement;
    const messageErr = parent.querySelector('#alert');
        messageErr.style.visibility = 'visible';
        messageErr.innerText = message;
}

 

//console.log(example.tasks);
//const task1 = example.addTask('Group 7', 'working on JavaScript', 'Sophia', '11/08/2022')
//console.log(task1);
//console.log(example);
const example = new taskManager(0);

