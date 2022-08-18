// HOME JS
const qrContainer = document.getElementById('qr-container');
const qrButton = document.getElementById('qr-button');
const qrArrow = document.getElementById('qr-arrow');

qrButton.addEventListener('click', () => {
  qrContainer.classList.toggle('qr-mobile--active')
})

qrArrow.addEventListener('click', () => {
  qrContainer.classList.toggle('qr-mobile--active')
})