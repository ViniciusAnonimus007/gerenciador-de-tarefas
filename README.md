# 📝 Gerenciador de Tarefas (Task Manager)

## 🎯 Objetivo
Este projeto tem como objetivo consolidar conhecimentos básicos em **CRUD** (Create, Read, Update, Delete) utilizando JavaScript puro. O foco é a manipulação do DOM e estruturação de dados.

*Nota: Este é um projeto de aprendizado, com potencial para evolução futura.*

## 🚀 Funcionalidades
- [x] Visualização de tarefas pendentes.
- [x] Criação de novas tarefas.
- [x] Deleção/Conclusão de tarefas.
- [x] Classificação por importância:
  - 🟢 **Verde** (Baixa)
  - 🟡 **Amarelo** (Média)
  - 🔴 **Vermelho** (Alta)
- [x] Cards com borda colorida baseada na importância.

## 📁 Estrutura do Projeto
- `task.js`: Define a classe/formato da tarefa (título, descrição, importância, data).
- `render.js`: Responsável pela renderização das tarefas no DOM.
- `app.js` (ou principal): Lógica do CRUD.

## 🛠️ Versionamento

### v1.6.0 - IU/UX Layout Profisório
- Formatação da página usando css.
- Semântica da página atualizada (`index.html`).
- UI/UX

### v1.5.0 - Funcionalidade de criar
- Funcionalidade para criação de novas tarefas.
- Refatoração de Lógica (`app.js`).
- Novo arquivo dedicado a criação da tarefa (`taskCreate.js`).
- Layout da página principal atualizado

### v1.4.1 - Correção de bug 
- Bug ao clicar na área da tarefa que apagava tudo, sem necessidade de apertar 'delete' (`app.js`).

### v1.4 - Funcionalidade de deletar
- Lógica para deleção da tarefa (`app.js`).
- Refatoração de Lógica (`render.js`).

### v1.3 - Teste da Funcionalidade de renderização
- Código de renderização testado e funcionando (`render.js`).
- Layout inicial (`index.js`).

### v1.2 - Refinamento e lógica inicial
- Melhorias no código de renderização (`render.js`).
- Lógica do inicial do programa (`app.js`).

### v1.1 - Estrutura e Renderização
- Criação da classe de modelo da tarefa (`task.js`).
- Implementação da função de renderização (`render.js`).
- Atualização da documentação.

### v1.0 - Estrutura Inicial
- Setup inicial do projeto.
- Criação do README.md.

---
*Desenvolvido por [Vinicius]*



