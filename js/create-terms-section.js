import {createTermsListItems} from './create-terms-list-items.js';

const createTermsSection = (data) => {
  const {key, items} = data;
  if (items.length !== 0) {
    return `<section class="glossary-section">
        <h2 id="${key.toUpperCase()}">${key.toUpperCase()}</h2>
        <ul class="glossary-list">
          ${createTermsListItems(items)}
        </ul>
      </section>`;
  }
};

export {createTermsSection};
