const rightColumn = document.getElementById('right-column');
const new_task_title = document.getElementById('new-task-title');
const new_task_description = document.getElementById('new-task-description');
const new_task_duedate = document.getElementById('new-task-duedate');
const new_task_create = document.getElementById('new-task-create');
//radios
const radioButtons = document.querySelectorAll(`input[name="priority-level"]`);
const new_task_prio_low = document.getElementById('new-task-prio-low');
const new_task_prio_mid = document.getElementById('new-task-prio-med');
const new_task_prio_high = document.getElementById('new-task-prio-high');


const addTask = () => {
    const divTask = document.createElement('div');
    divTask.classList.add('task');

    const details = document.createElement('details');
    const summary = document.createElement('summary');

    //checklist
    const checklistBox = document.createElement('div');
    checklistBox.classList.add('checklist');

    //title
    const taskTitle = document.createElement('p');
    taskTitle.innerHTML = new_task_title.value;
    
    //priority
    const priority = document.createElement('div');
    priority.classList.add('priority');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            priority.id = radioButton.id;
        }
    }
    //findSelectedPriority();

    //calendar date
    const dueDate = document.createElement('p');
    dueDate.classList.add('task-due-date');
    console.log(new_task_duedate.value);
    dueDate.innerHTML = `Due ${new_task_duedate.value}`;

    //descriptions
    const taskDetails = document.createElement('p');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = new_task_description.value;

    divTask.appendChild(details);
        details.appendChild(summary);
        details.appendChild(taskDetails);
            summary.appendChild(checklistBox);
            summary.appendChild(taskTitle);
            summary.appendChild(priority);
            summary.appendChild(dueDate)

    rightColumn.appendChild(divTask);
}
//problem
// 
/* new_task_create.addEventListener('click', () => {
    console.log("Yooo");
    let selectedPriority;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedPriority = radioButton.id;
        }
    }
    if (selectedPriority === 'new-task-prio-low') {
        priority.classList.add('prio-low')
    }
    if (selectedPriority === 'new-task-prio-med') {
        priority.classList.add('prio-med')
    }
    if (selectedPriority === 'new-task-prio-high') {
        priority.classList.add('prio-high')
    }

}) */

export {addTask};