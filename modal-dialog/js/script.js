const modalCloseButton = document.querySelector('.modal-widget button');
const modalOpenButton = document.querySelector('#open-modal-button');
const modalOverlay = document.querySelector('.overlay');
const modalDialog = document.querySelector('.modal-dialog');


modalOpenButton.addEventListener('click', closeModal);


modalCloseButton.addEventListener('click', closeModal);


modalOverlay.addEventListener('click', closeModal);


function closeModal() {
    modalDialog.classList.toggle('active');
    modalOverlay.classList.toggle('hidden');
}
  