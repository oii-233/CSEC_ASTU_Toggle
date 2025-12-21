lucide.createIcons();

const btn = document.getElementById('toggleBtn');
const body = document.body;
const statusText = document.getElementById('statusText');

btn.addEventListener('click', () => {
    // 1. Toggle Classes
    body.classList.toggle('light-on');
    body.classList.toggle('dark-mode');

    // 2. Update Text and Button
    if (body.classList.contains('light-on')) {
        statusText.innerText = "Let there be light!";
        btn.innerText = "Switch Off";
        btn.style.background = "#e74c3c"; // Change button to red when on
    } else {
        statusText.innerText = "The Room is Dark";
        btn.innerText = "Switch On";
        btn.style.background = "#3498db"; // Change button back to blue
    }
});