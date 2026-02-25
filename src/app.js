import Task from './models/task.js';
import { render } from './views/render.js';

const taskContainer = document.querySelector('.tasks_container');


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

render(taskContainer, list);

taskContainer.addEventListener('click', (e) => {
  e.target.parentNode.remove();
})
