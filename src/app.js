import Task from './models/task.js';
import { render } from './views/render.js';
import { taskCreate } from './controller/taskCreate.js';

const $taskContainer = document.querySelector('.tasks_container');
const $createButton = document.querySelector('#create_button')

let list = [
  {
    title: 'EBJ',
    description: 'Evento da EBJ',
    importance: 'green',
    data: '9:30 25/02/2026'
  }, 
  {
    title: 'São João',
    description: 'Evento da escola',
    importance: 'yellow',
    data: '7:00 06/06/2026'
  }
]

render($taskContainer, list);

$taskContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete_button')) {
    e.target.parentElement.remove();
  }
});


$createButton.addEventListener('click', () =>{
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const importance = document.querySelector('#importance').value;
  
  taskCreate($taskContainer, list, title, description, importance);
  
})