import {createClassedElement} from '../utility_functions/createClassedElement.js';

function createBtnScrollUp() {
  const elBtn = createClassedElement('button', 'hide');
  elBtn.setAttribute('id', 'btn-scroll-up');

  elBtn.innerText = '▲';

  document.addEventListener('scroll', () => window.scrollY > 500 ? elBtn.classList.remove('hide') : elBtn.classList.add('hide'));
  elBtn.addEventListener('click', () => document.body.scrollIntoView({behavior: 'smooth'}));

  return elBtn;
}

export {createBtnScrollUp};