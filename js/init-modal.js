import {terms} from './mock.js';
import {glossary, modal, modalContent} from './elements.js';
import {initCloseModal} from './close-modal.js';

const initModal = () => {
  const fillModalContent = (evt) => {
    const selectedWord = evt.target.closest('h3');
    if (selectedWord === null) {
      return;
    }
    const selectedWordFirstLetter = selectedWord.textContent[0];
    const firstLetterArray = terms.find((element) => element.key === selectedWordFirstLetter).items;
    const wordDescription = firstLetterArray.find((word) => word.term === selectedWord.textContent).description;
    modalContent.querySelector('p').remove();
    modal.style.display = 'block';
    modalContent.insertAdjacentHTML('afterbegin', wordDescription);
  };
  glossary.addEventListener('click', fillModalContent);
  initCloseModal();
};

export {initModal};
