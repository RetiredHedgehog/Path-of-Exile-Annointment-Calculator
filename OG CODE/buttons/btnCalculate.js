import {Permutation as $Permutation} from 'https://cdn.jsdelivr.net/npm/js-combinatorics@1.5.6/combinatorics.min.js';
import {anointmentsAmulets, anointmentsRings, anointmentsMaps} from '../data/importData.js';
import {errorMessageHandler} from '../error_section/errorHandler.js';
import {addExpandSectionWrap, addExpandSection} from '../expand_section/addExpandSection.js';

function createBtnCalculate() {
  const elBtn = document.createElement('button');

  elBtn.setAttribute('id', 'btn-calculate');
  elBtn.innerText = 'Calculate';

  elBtn.addEventListener('click', btnCalculatePushed, false);

  return elBtn;
}

function btnCalculatePushed({target}) {
  const oilMap = new Map();
  let oilCount = 0;

  Array.from(document.getElementsByClassName('oil-input-wrap')).forEach(
    ({children: [{innerText: text}, {value}]}) => {
      if (+value) {
        const v = Math.abs(value) >= 3 ? 3 : Math.abs(value);

        oilMap.set(text.split(' ')[0], v);

        oilCount += v;
      }
    }
  );

  document.getElementsByClassName('expand-section-wrap')[0]?.remove();

  if (errorMessageHandler(oilCount)) {
    return;
  }

  target.disabled = true;

  addExpandSectionWrap();

  const oilsArr = [];

  oilMap.forEach((value, key) => {
    for (let i = value; i > 0; i--) {
      oilsArr.push(key);
    }
  });

  const params = {
    perm3Check: ['Amulets and Blight uniques anointments', {className: 'amulet-unique-table', unpackedJSON: anointmentsAmulets, permutation: null}],
    perm2Check: ['Rings anointments', {className: 'rings-table', unpackedJSON: anointmentsRings, permutation: null}],
    perm1Check: ['Maps anointments', {className: 'Maps-table', unpackedJSON: anointmentsMaps, permutation: null}]
  }

  document.querySelectorAll('.checkbox').forEach(({checked, id}) => {
    if (checked) {
      const permNum = id.match(/[0-9]/)[0];

      new Promise(res => 
        setTimeout(() => 
          res(new Set([...new $Permutation(oilsArr, permNum)].map(elem => elem.join(''))))
        , 0)
      )
      .then((permutation) => {
        params[id][1].permutation = permutation;

        addExpandSection(...params[id]);
      })
      .then(() =>
        target.disabled = false
      );
    }
  });
}

export {createBtnCalculate};
