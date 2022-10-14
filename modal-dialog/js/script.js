const modalOpenButton = document.querySelector('#open-modal-button');
const modalCloseButton = document.querySelector('.modal-widget #close-modal-button');
const modalOverlay = document.querySelector('.overlay');
const modalDialog = document.querySelector('.modal-dialog');


modalOpenButton.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);



function toggleModal() {
    modalDialog.classList.toggle('active');
    modalOverlay.classList.toggle('active');
}
  