const newColorBtn = document.querySelector('.new-color');
const currentBgColorEl = document.querySelector('.bg-color');

function getRandomNumber() {
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

function getRGB() {
    return [getRandomNumber(), getRandomNumber(), getRandomNumber()];
}

function rgbToHex(rgb) {
    return (
        '#' +
        rgb
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
    );
}

function onLoad() {
    const generatedRGB = getRGB();
    document.body.style.backgroundColor = `rgb(${generatedRGB.join(', ')})`;
    currentBgColorEl.textContent =
        'Current color: ' + rgbToHex(generatedRGB).toUpperCase();
}

window.addEventListener('load', onLoad);
newColorBtn.addEventListener('click', onLoad);
