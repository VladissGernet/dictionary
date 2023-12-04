const createTermsListItems = (items) => items.map((termData) => {
  const {term} = termData;
  return `
    <li class="glossary-item">
      <a href="#">
        <h3>${term}</h3>
      </a>
    </li>
    `;
}).join('');

export {createTermsListItems};
