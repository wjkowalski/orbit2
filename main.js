const moon = document.getElementById('moon');
const planet = document.getElementById('planet');
function getPosition(body) { // use this to get position of moon and planet
    const rect = body.getBoundingClientRect();
    const x = rect.left;
    return (x);
}

let moonPos = getPosition(moon);
let planetPos = getPosition(planet);
let distance = planetPos - moonPos;
let stopAnimation = false;
let styles = window.getComputedStyle(moon); // figure out where moon is at any moment
let i = 0;
function animateMoon() {
    if(!stopAnimation){
        currentX = Math.floor(getPosition(moon));
        if (i === 0){
            startingX = getPosition(moon); // get value of X at beginning of orbit
        }
        i++;
        requestAnimationFrame(animate);
        let moonPos = getPosition(moon);
        let planetPos = getPosition(planet);
        let distance = Math.floor(planetPos - moonPos);
        console.log(distance);
        if (distance > 150){
            moon.style.zIndex = '10';
        }
        if (distance < -175 ) {
            moon.style.zIndex = '-10';
        }
    }
}

animateMoon();

