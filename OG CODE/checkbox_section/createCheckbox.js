import {setMultipleAttributes} from '../utility_functions/setMultipleAttributes.js';
import {createClassedElement} from '../utility_functions/createClassedElement.js';

function createCheckbox() {
  const createCheckboxDiv = (() => {
    const elCheckbox = createClassedElement('input', 'checkbox');
    setMultipleAttributes(elCheckbox, {type: 'checkbox', checked: false});

    const elCheckboxLabel = document.createElement('label');

    const elCheckboxDiv = createClassedElement('div', 'checkbox-group');

    elCheckboxDiv.append(elCheckbox, elCheckboxLabel);

    return function({id, checked, innerText}) {
      const elClonedDiv = elCheckboxDiv.cloneNode(true);

      elClonedDiv.firstElementChild.setAttribute('id', id);
      
      elClonedDiv.firstElementChild.checked = checked;

      elClonedDiv.lastElementChild.innerText = innerText;

      return elClonedDiv;
    }
  })();

  const elWrap = createClassedElement('div', 'section checkbox-wrap');

  elWrap.append(createCheckboxDiv({
    id: 'perm3Check',
    checked: true,
    innerText: 'Show Amulets and Blight uniques anointments'
  }));

  elWrap.append(createCheckboxDiv({
    id: 'perm2Check',
    checked: false,
    innerText: 'Show Ring anointments'
  }));

  elWrap.append(createCheckboxDiv({
    id: 'perm1Check',
    checked: false,
    innerText: 'Show Maps anointments'
  }));

  function clickHandler(e) {
    if (e.target.matches('.checkbox')) {
      const elBtn = document.getElementById('btn-calculate');

      [...document.querySelectorAll('.checkbox')].reduce((acc, {checked}) => acc + checked, 0) ? elBtn.removeAttribute('disabled') : elBtn.setAttribute('disabled', true);
    }
  }

  elWrap.addEventListener('click', clickHandler);

  return elWrap;
}

export {createCheckbox};
