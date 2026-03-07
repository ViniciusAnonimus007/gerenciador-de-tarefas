# 📝 Gerenciador de Tarefas (Task Manager)

## 🎯 Objetivo
Este projeto tem como objetivo consolidar conhecimentos básicos em **CRUD** (Create, Read, Update, Delete) utilizando JavaScript puro. O foco é a manipulação do DOM e estruturação de dados.

- Objetivo atual: login/cadastro de usuários usando Local Storage.

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

## 🛠️ Versionamento

### v1.6.7 - Melhorias gerais, correção de bugs e banco de dados atualizado
- Laytout da página de tarefas atualizada para uma melhor experiência do usuário.
- Melhorias na responsividade da página.
- Bugs Corrigidos relacionados a criação e deleção de tarefas.
- Banco de dados atualizado para o local storage, permitindo que as tarefas sejam salvas mesmo após o fechamento da página. 

### v1.6.5 Pequenas alterações gráficas
- Os campos são limpos quando uma nova tarefa é criada.
- As cores do card de tarefa são mais agradáveis.
- Opção _"Não selecionado"_ como padrão (`index.html`).

### v1.6.4 Estrutura atualizada
- Atualização da estrutura do projeto.
- Arquivos refatorados e redistribuidos.
- Arquivo (`render.js`) apagado por não ser ter utilidades, visando que o arquivo (`taskCreate.js`) é mais escalavel.
- Documento readme.md não possui mais a estrutura do projeto.
- Pequenas alterações na UI/UX, cada tarefa recebe uma cor relacionada a sua importância.

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



