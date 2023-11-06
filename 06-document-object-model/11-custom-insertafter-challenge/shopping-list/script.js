function insertAfter (newEl, existingEl) {
  // existingEl.insertAdjacentElement('afterend', newEl);
  // or
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const existingEl = document.querySelector('li:nth-child(3)');

const newEl = document.createElement('li');
newEl.textContent  = 'insertAfter';

insertAfter(newEl, existingEl);