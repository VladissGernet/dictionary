const createTermsListItems = (items) => items.map((termData) => {
  const {term} = termData;
  return `
    <li class="glossary-item">
      <a href="#">
        ${term}
      </a>
    </li>
    `;
}).join('');

export {createTermsListItems};
