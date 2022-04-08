// import './index.css';
import {createOilInput} from '../oil_input_section/createOilInput.js';
import {createCheckbox} from '../checkbox_section/createCheckbox.js';
import {createBtnCalculate} from '../buttons/btnCalculate.js';
import {createErrorWrap} from '../error_section/errorHandler.js';
import {createBtnScrollUp} from '../buttons/createBtnScrollUp.js';

initBody();

function initBody() {
  const main = document.createElement('main');

  main.setAttribute('id', 'main');

  main.append(createOilInput(), createCheckbox(), createBtnCalculate(), createErrorWrap(), createBtnScrollUp());

  document.body.append(main);
}
