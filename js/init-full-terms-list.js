import {terms} from './mock.js';
import {glossary} from './elements.js';
import {createTermsSection} from './create-terms-section.js';

const initMainPageAuthorsList = () => {
  const receivedAuthors = terms.map((letter) => createTermsSection(letter)).join('');
  glossary.innerHTML = '';
  glossary.insertAdjacentHTML('afterbegin', receivedAuthors);
};

export {initMainPageAuthorsList};
