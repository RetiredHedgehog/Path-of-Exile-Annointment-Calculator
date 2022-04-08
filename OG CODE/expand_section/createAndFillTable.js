import {createClassedElement} from '../utility_functions/createClassedElement.js';

function createAndFilltable({className, permutation, unpackedJSON}) {
  const elTable = createClassedElement('table', 'anoint-table');
  
  const elTableHeader = elTable.createTHead().insertRow();

  for (let i = 1; i < 4; i++) {
    elTableHeader.insertCell().innerText = `Oil #${i}`;
  }

  if (className === 'amulet-unique-table') {
    elTableHeader.insertCell().innerText = 'Skill name';
  }

  elTableHeader.insertCell().innerText = 'Description';

  const elTBody = elTable.createTBody();

  permutation.forEach(elem => {
    if (Object.prototype.hasOwnProperty.call(unpackedJSON, elem)) {
      const {oil1, oil2, oil3, name = '', description} = unpackedJSON[elem];

      const elRow = elTBody.insertRow();

      if (elTable.rows.length % 2 === 0) {
        elRow.classList.add('table-row-even');
      }

      [oil1, oil2, oil3].forEach(elem => {
        const oilName = elem.split(' ')[0].toLowerCase();

        if (oilName) {
          elRow.classList.add(oilName);
        }
      });

      elRow.insertCell().innerText = oil1;
      elRow.lastElementChild.classList.add('table-cell-oil');

      elRow.insertCell().innerText = oil2;
      elRow.lastElementChild.classList.add('table-cell-oil');

      elRow.insertCell().innerText = oil3;
      elRow.lastElementChild.classList.add('table-cell-oil');

      if (name) {
        elRow.insertCell().innerText = name;
        elRow.lastElementChild.classList.add('table-cell-name');
      }

      elRow.insertCell().innerText = description;
      elRow.lastElementChild.classList.add('table-cell-description');
    }
  });

  return elTable;
}

export {createAndFilltable};
