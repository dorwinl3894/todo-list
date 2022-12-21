import '../src/style.css';
import {inboxBackend} from './inboxBackend';
import {ShowInboxDOM} from './inboxDOM';
import { addTask } from './addTask';
import { createTask, closeTask, finishTask} from './createTask';

//slides in task
createTask();
//slides out task
closeTask();
//finishes task by sliding it up
finishTask();

//make tasks transparent or crossed out after checkmark is pressed