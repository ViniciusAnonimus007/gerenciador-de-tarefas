import { taskCreate } from './controller/taskCreate.js';
import { taskDelete } from './controller/taskDelete.js';
import { clearCamp } from './utils/clearCamp.js';

const fields = document.querySelectorAll('input');
const $taskContainer = document.querySelector('.tasks_container');
const $createButton = document.querySelector('#create_button');

taskDelete($taskContainer);

$createButton.addEventListener('click', () =>{
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const importance = document.querySelector('#importance').value;
  
  
  taskCreate($taskContainer, title, description, importance);
  
  clearCamp(fields);
})