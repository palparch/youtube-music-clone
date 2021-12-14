const header = document.getElementsByTagName("header")[0];

var backgrounds = ["banner-shells-blue-wood.jpg", "canva-orange-ebb.jpg", "flower-garden.png", "geometrical-pink-yellow.png", "minimalistic-lamps.png", "night-city-digital.png", "pixelated-sunset.jpg", "sakura.png", "sea-waves.png"]

let singlebg = 'url("images/banners/' + backgrounds[Math.floor(Math.random()*backgrounds.length)] + '");';

header.style.backgroundImage = singlebg;
