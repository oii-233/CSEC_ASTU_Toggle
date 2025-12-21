const heading = document.getElementById('toggleText');
const button = document.getElementById('toggleBtn');
const lamp = document.getElementById('lamp');
const body = document.body;

let isOn = false;

button.addEventListener('click', () => {
    isOn = !isOn;
    heading.textContent = isOn ? 'ON' : 'OFF';

    // Toggle lamp
    lamp.classList.toggle('on', isOn);

    // Toggle background
    body.style.backgroundColor = isOn ? '#f0e68c' : '#1c1c1c';
});
