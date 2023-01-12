var openModal = document.querySelector('#open-modal');
var modalContainer = document.querySelector('#modal-container');
function openModalDialogue(event) {
  modalContainer.className = '';
}
function closeModalDialogue(event) {
  modalContainer.className = 'display-none';
}
openModal.addEventListener('click', openModalDialogue);
modalContainer.querySelector('#modal-button').addEventListener('click', closeModalDialogue);
