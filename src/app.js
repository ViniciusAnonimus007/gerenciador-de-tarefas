import Task from './models/task.js';
import { taskCreate } from './controller/taskCreate.js';
import { taskDelete } from './controller/taskDelete.js';

const $taskContainer = document.querySelector('.tasks_container');
const $createButton = document.querySelector('#create_button');

taskDelete($taskContainer);

$createButton.addEventListener('click', () =>{
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const importance = document.querySelector('#importance').value;
  const inputs = document.querySelectorAll('input');
  
  
  taskCreate($taskContainer, title, description, importance);
  
  inputs.forEach((input) => input.value = "");
  
})