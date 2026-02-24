import Task from './models/task.js';
import { render } from './views/render.js';

const taskContainer = document.querySelector('.tasksContainer');

render(taskContainer, list);
