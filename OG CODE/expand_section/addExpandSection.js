import {createAndFilltable} from './createAndFillTable.js';
import {createClassedElement} from '../utility_functions/createClassedElement.js';
import {setMultipleAttributes} from '../utility_functions/setMultipleAttributes.js';
import { oilNames } from '../oil_input_section/createOilInput.js';

const addExpandSectionWrap = () => {
  const elExpandSectionWrap = createClassedElement('div', 'section expand-section-wrap');
  const elFilterBar = createClassedElement('input', 'filter-bar');

  setMultipleAttributes(elFilterBar, {type: 'text', autocomplete: 'off', placeholder: 'Filter by oil...'});

  elFilterBar.addEventListener('input', (e) => {
    filterTable(e.target.value);
  });

  elExpandSectionWrap.append(elFilterBar);

  document.getElementById('main').append(elExpandSectionWrap);
}

const filterTable = (() => {
  const oilNamesSplit = oilNames.map(elem => elem.split(' ')[0].toLowerCase());
  const oilNamesStr = oilNamesSplit.join(' ');

  return (text) => {
    document.querySelectorAll('table tbody tr.hide').forEach(elem => elem.classList.remove('hide'));

    const reg = new RegExp(`(?<=^| )(${text.toLowerCase()}[a-z]*)`, 'g');
    const selector = `table tbody tr:not(.${oilNamesStr.match(reg)?.join(', .')})`

    if (text) {
      document.querySelectorAll(selector).forEach(elem => elem.classList.add('hide'));
    }
  }
})();

function addExpandSection(sectionName, tableParams) {
  function linkClicked({target}) {
    const {children: [down, up]} = target;

    down.classList.toggle('hide');
    up.classList.toggle('hide');

    target.nextElementSibling.classList.toggle('hide');
  }

  const elABtn = createClassedElement('a', 'toggle');
  elABtn.innerText = sectionName;

  const elSpanDown = createClassedElement('span', 'arrow');
  elSpanDown.innerText = '▼'

  const elSpanUp = createClassedElement('span', 'arrow hide');
  elSpanUp.innerText = '▲';

  elABtn.append(elSpanDown, elSpanUp);

  elABtn.addEventListener('click', linkClicked);

  const elTableWrap = createClassedElement('div', 'toggle-content hide');

  elTableWrap.append(createAndFilltable(tableParams));

  document.getElementsByClassName('expand-section-wrap')[0].append(elABtn, elTableWrap);
}

export {addExpandSectionWrap, addExpandSection};