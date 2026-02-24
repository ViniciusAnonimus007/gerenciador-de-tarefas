export function render(taskList, list) {
    if (!list) { return 'Sem Tarefas pendentes' };

    // Cria o card da tarefa (que será exibido na página) usando cada tarefa da lista;

    list.forEach((task) => {
        const $div = document.createElement('div');
        $div.className = 'taskView';

        const $title = document.createElement('h3');
        $title.textContent = task.title;

        const $description = document.createElement('p');
        $description.textContent = task.description;

        const $importance = document.createElement('p');
        $importance.textContent = task.importance;

        const $data = document.createElement('p');
        $data.textContent = task.data;

        const $buttonDelete = document.createElement('button');
        $buttonDelete.id = list.length;


        $div.id = list.length;
        $div.appendChild($title);
        $div.appendChild($description);
        $div.appendChild($importance);
        $div.appendChild($data);
        $div.appendChild($buttonDelete);

        taskList.appendChild($div);
    });
}