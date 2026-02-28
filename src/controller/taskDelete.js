export function taskDelete(container) {
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete_button')) {
            e.target.parentElement.remove();
        }
    });
}