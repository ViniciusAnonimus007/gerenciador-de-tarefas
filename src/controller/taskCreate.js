export function taskCreate(taskList, task, title, description, importance) {
  const dataFunction = new Date();

  // Função auxiliar para formatar com zero à esquerda
  const zeroFill = n => n.toString().padStart(2, '0');

  const date = `${zeroFill(dataFunction.getHours())}:` +
             `${zeroFill(dataFunction.getMinutes())} ` +
             
             `${zeroFill(dataFunction.getDate())}/` +
             `${zeroFill(dataFunction.getMonth() + 1)}/` + // +1 porque o mês começa em 0
             `${dataFunction.getFullYear()}`;
  
  
  const $div = document.createElement('div');

  const $title = document.createElement('h3');
  $title.textContent = title;
        
  const $description = document.createElement('p');
  $description.textContent = description;

  const $data = document.createElement('p');
  $data.textContent = date;

  const $buttonDelete = document.createElement('button');
  $buttonDelete.className = 'delete_button';
  $buttonDelete.textContent = 'Delete';

  $div.className = 'taskView';

  $div.appendChild($title);
  $div.appendChild($description);
  $div.appendChild($data);
  $div.appendChild($buttonDelete);

  taskList.appendChild($div);
}