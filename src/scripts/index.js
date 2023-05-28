const signInBtn = document.getElementById('sign-up');
// Создаем модальное окно
function createModal() {
    // Создаем обертку для модального окна
    const modalWrapper = document.createElement('div');
    modalWrapper.id = 'modalWrapper';


    // Создаем контент модального окна
    const modalContent = document.createElement('div');
    modalContent.id = 'modalContent';


    // Создаем заголовок
    const heading = document.createElement('h1');
    heading.innerText = 'Oops! Something went wrong';
    modalContent.appendChild(heading);


    // Создаем кнопку закрытия
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Closed';
    closeButton.addEventListener('click', closeModal);
    modalContent.appendChild(closeButton);

    // Добавляем контент в обертку
    modalWrapper.appendChild(modalContent);

    // Добавляем модальное окно в body
    document.body.appendChild(modalWrapper);
}

// Открытие модального окна
function openModal() {
    const modalWrapper = document.getElementById('modalWrapper');
    modalWrapper.style.display = 'flex';
    setTimeout(function() {
        modalWrapper.style.opacity = '1';
    }, 10);
}

// Закрытие модального окна
function closeModal() {
    const modalWrapper = document.getElementById('modalWrapper');
    modalWrapper.style.opacity = '0';
    setTimeout(function() {
        modalWrapper.style.display = 'none';
        modalWrapper.remove(); // Удаляем модальное окно из HTML
    }, 300);
}

// Обработчик клика за пределами модального окна
window.onclick = function(event) {
    const modalWrapper = document.getElementById('modalWrapper');
    if (event.target == modalWrapper) {
        closeModal();
    }
};


// Создаем модальное окно при загрузке страницы
signInBtn.onclick = function() {
    createModal();
};