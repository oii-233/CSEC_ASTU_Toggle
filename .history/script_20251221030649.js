// 1. Initialize the icons so they appear
lucide.createIcons();

const btn = document.getElementById('toggleBtn');
const body = document.body;
const text = document.getElementById('toggleText');

btn.addEventListener('click', () => {
    // Toggle the 'on-mode' class on the body
    body.classList.toggle('on-mode');

    // Change the text based on if 'on-mode' is active
    if (body.classList.contains('on-mode')) {
        text.innerText = "ON";
        btn.innerText = "Switch Off";
    } else {
        text.innerText = "OFF";
        btn.innerText = "Switch On";
    }
});