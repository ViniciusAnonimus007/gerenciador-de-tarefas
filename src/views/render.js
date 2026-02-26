export function render(taskList, list) {
    if (!list) { return 'Sem Tarefas pendentes' };

    // Cria o card da tarefa (que será exibido na página) usando cada tarefa da lista;

    list.forEach((task) => {
        const $div = document.createElement('div');

        const $title = document.createElement('h3');
        $title.textContent = task.title;
        
        const $description = document.createElement('p');
        $description.textContent = task.description;

        const $data = document.createElement('p');
        $data.textContent = task.data;

        const $buttonDelete = document.createElement('button');
        $buttonDelete.className = 'delete_button';
        $buttonDelete.textContent = 'Delete';

        $div.className = 'taskView';

        $div.appendChild($title);
        $div.appendChild($description);
        $div.appendChild($data);
        $div.appendChild($buttonDelete);

        taskList.appendChild($div);
    });
}