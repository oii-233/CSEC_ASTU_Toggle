// ===== JavaScript =====
const heading = document.getElementById('toggleText');
const button = document.getElementById('toggleBtn');

// Variable to track current state
let isOn = false; // false = OFF, true = ON

// Event listener for button click
button.addEventListener('click', () => {
    if (isOn) {
        heading.textContent = 'OFF';
        isOn = false;
    } else {
        heading.textContent = 'ON';
        isOn = true;
    }
});
