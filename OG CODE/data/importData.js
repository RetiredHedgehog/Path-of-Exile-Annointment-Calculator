let anointmentsAmulets, anointmentsRings, anointmentsMaps;

fetch('../data/anointmentsAmulets.json')
  .then(response => response.json())
  .then(data => anointmentsAmulets = JSON.parse(data));

fetch('../data/anointmentsRings.json')
  .then(response => response.json())
  .then(data => anointmentsRings = JSON.parse(data));

fetch('../data/anointmentsMaps.json')
  .then(response => response.json())
  .then(data => anointmentsMaps = JSON.parse(data));

export {anointmentsAmulets, anointmentsRings, anointmentsMaps};
