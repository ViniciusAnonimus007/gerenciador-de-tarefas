import Task from './models/task.js';
import { render } from './views/render.js';

const taskContainer = document.querySelector('.tasks_container');

let list = [{
  title: 'EBJ',
  description: 'Evento da EBJ',
  importance: 'green',
  data: '9:30 25/02/2026'
}]

render(taskContainer, list);
