function createClassedElement(tag, classNames) {
  const elem = document.createElement(tag);

  elem.classList.add(...classNames.split(' '));

  return elem;
}

export {createClassedElement};