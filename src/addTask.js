const rightColumn = document.getElementById('right-column');
const new_task_title = document.getElementById('new-task-title');
const new_task_description = document.getElementById('new-task-description');
const new_task_duedate = document.getElementById('new-task-duedate');
const new_task_create = document.getElementById('new-task-create');
//radios
const radioButtons = document.querySelectorAll(`input[name="priority-level"]`);

const findSelectedPriority = () => {
    new_task_create.addEventListener('click', () => {
        let selectedPriority;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedPriority = radioButton.value;
                return selectedPriority;
            }
        }
        if (selectedPriority === 'low') {
            priority.classList.add('prio-low')
        }
        if (selectedPriority === 'medium') {
            priority.classList.add('prio-med')
        }
        if (selectedPriority === 'high') {
            priority.classList.add('prio-high')
        }
    })
}
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
    findSelectedPriority();

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

export {addTask};