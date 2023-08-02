const body = document.body;

const hueRotation = Math.floor(Math.random() * (360 - 0));
body.style.backdropFilter = `hue-rotate(${hueRotation}deg)`;

const backgrounds = [
    "./assets/crystal-background.svg",
    "./assets/hexagon-background.svg",
    "./assets/pentagon-background.svg",
    "./assets/polygon-background.svg",
    "./assets/square-background.svg",
    "./assets/stars-background.svg",
    "./assets/triangle-background.svg"
]
const backgroundURL = backgrounds[Math.floor(Math.random() * backgrounds.length)]
body.style.backgroundImage = `url('${backgroundURL}')`
