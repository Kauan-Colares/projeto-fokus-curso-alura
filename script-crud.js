// encontrar botão adicionar tarefa

const btAddTask = document.querySelector('.app__button--add-task');
const formAddHidden = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const tasks = [];

btAddTask.addEventListener('click', () => {
    formAddHidden.classList.toggle('hidden');
});

formAddHidden.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const task = {
        descricao: textArea.value
    }
    tasks.push(task);
    localStorage.setItem('tarefas', JSON.stringify(tasks));
});
