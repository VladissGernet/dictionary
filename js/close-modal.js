import {modal, modalCloseButton} from './elements.js';

const initCloseModal = () => {
  const closeModal = () => {
    modal.style.display = 'none';
  };

  modalCloseButton.addEventListener('click', () => {
    closeModal();
  });

  modal.addEventListener('click', (evt) => {
    const outOfContainerClick = evt.target.closest('.modal-popup');
    if (outOfContainerClick !== null) {
      return;
    }
    closeModal();
  });
};

export {initCloseModal};

