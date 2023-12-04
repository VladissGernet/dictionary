import {terms} from './mock.js';
import {glossary} from './elements.js';
import {createTermsSection} from './create-terms-section.js';

const initMainPageTermsList = () => {
  const receivedTerms = terms.map((letter) => createTermsSection(letter)).join('');
  glossary.innerHTML = '';
  glossary.insertAdjacentHTML('afterbegin', receivedTerms);
};

export {initMainPageTermsList};
