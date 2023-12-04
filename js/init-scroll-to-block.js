import {siteNavigation} from './elements.js';

const initScrollToBlock = () => {
  siteNavigation.addEventListener('click', (evt) => {
    evt.preventDefault();
    const link = evt.target.closest('a');
    if (link === null) {
      return;
    }
    const isHrefInLink = link.hasAttribute('href');
    if (isHrefInLink === false) {
      return;
    }
    const linkId = link.getAttribute('href');
    const block = document.querySelector(linkId);
    if (block) {
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
};

export {initScrollToBlock};
