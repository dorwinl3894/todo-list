
import { addTask } from "./addTask";

const btn_add_task = document.getElementById('btn-add-task');
const addTaskPopup = document.getElementById('addTaskPopup');
const new_task_close = document.getElementById('new-task-close');
const new_task_create = document.getElementById('new-task-create');

const new_task_title = document.getElementById('new-task-title');
const new_task_description = document.getElementById('new-task-description');
const new_task_duedate = document.getElementById('new-task-duedate');

console.log("hiii");

const createTask = () => {
    btn_add_task.addEventListener('click', () => {
        console.log("ClickeD btan!");
        addTaskPopup.style.top = '3rem';
    })
}

const closeTask = () => {
    new_task_close.addEventListener('click', () => {
        addTaskPopup.style.top = '-35rem';
    })
}

const finishTask = () => {
    new_task_create.addEventListener('click', () => {
        console.log("Clicked Create Task Butfwafwafwaton");
        addTaskPopup.style.top = '-35rem';
        addTask();
        deleteInputsFromTask();
    })
}
const deleteInputsFromTask = () => {
    new_task_title.value = '';
    new_task_description.value = '';
    new_task_duedate.value = '';
}
export {createTask, closeTask, finishTask};