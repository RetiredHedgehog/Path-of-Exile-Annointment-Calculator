import {createClassedElement} from '../utility_functions/createClassedElement.js';

function createErrorWrap() {
  const elErrorWrap = createClassedElement('div', 'section error-wrap', 'hide');

  return elErrorWrap;
}

const errorMessageHandler = function(count) {
  const errorDiv = document.getElementsByClassName('error-wrap')[0];

  const minOil = [...document.querySelectorAll('.checkbox')].filter(({checked}) => checked)[0].getAttribute('id').match(/[0-9]/)[0];

  if (count < minOil) {
    errorDiv.innerText = `Enter at least ${minOil} oil${minOil > 1 ? 's' : ''}!`;

    errorDiv.classList.remove('hide');

    return true;
  } 

  errorDiv.classList.add('hide');

  return false;
}

export {createErrorWrap, errorMessageHandler};
