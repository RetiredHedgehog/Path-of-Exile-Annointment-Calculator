import {setMultipleAttributes} from '../utility_functions/setMultipleAttributes.js';
import {createClassedElement} from '../utility_functions/createClassedElement.js';

const oilNames = ['Clear Oil', 'Sepia Oil', 'Amber Oil', 'Verdant Oil', 'Teal Oil', 'Azure Oil', 'Indigo Oil', 'Violet Oil', 'Crimson Oil', 'Black Oil', 'Opalescent Oil', 'Silver Oil', 'Golden Oil'];

function createOilInput() {

    const elDivContainer = createClassedElement('div', 'section oil-input-container');

    const elDiv = createClassedElement('div', 'oil-input-wrap');

    const elP = createClassedElement('p', 'oil-name');
  
    const elInput = createClassedElement('input', 'oil-number-input');

    setMultipleAttributes(elInput, {type: 'number', min: 0, placeholder: '0'});

    elDiv.append(elP, elInput);

    oilNames.forEach(elem => {
      const elDivClone = elDiv.cloneNode(true);

      elDivClone.firstElementChild.innerText = elem;

      elDivContainer.append(elDivClone);
    });

    return elDivContainer;
  }

export {createOilInput, oilNames};
