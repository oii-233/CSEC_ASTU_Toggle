<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lamp Toggle Light/Dark</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1 id="toggleText">OFF</h1>

    <!-- Lamp SVG -->
    <div class="lamp" id="lamp">
        <!-- You can use inline SVG here -->
        <svg id="bulb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="#7f8c8d">
            <path d="M12 2a7 7 0 0 0-7 7c0 2.7 2 4.7 2 6.5V18h10v-2.5c0-1.8 2-3.8 2-6.5a7 7 0 0 0-7-7z"/>
        </svg>
    </div>

    <button id="toggleBtn">Toggle</button>

    <script src="script.js"></script>
</body>
</html>
