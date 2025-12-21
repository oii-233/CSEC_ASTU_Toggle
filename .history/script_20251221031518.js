const modelViewer = document.querySelector("#roomModel");
const btn = document.querySelector("#toggleBtn");
const statusText = document.querySelector("#statusText");

let lightIsOn = false;

btn.addEventListener("click", () => {
    lightIsOn = !lightIsOn;

    if (lightIsOn) {
        // Change the 3D lighting properties
        modelViewer.exposure = 1.5; // Brighter
        modelViewer.shadowIntensity = 2;
        statusText.innerText = "Power: ON";
        btn.innerText = "Switch Light OFF";
        btn.style.background = "#ffc107";
    } else {
        modelViewer.exposure = 0.1; // Dark
        modelViewer.shadowIntensity = 0;
        statusText.innerText = "Power: OFF";
        btn.innerText = "Switch Light ON";
        btn.style.background = "#007bff";
    }
});