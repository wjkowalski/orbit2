const moon = document.getElementById('moon');
const planet = document.getElementById('planet');
function getXOf(body) { // use this to get position of moon and planet
    const rect = body.getBoundingClientRect();
    const x = rect.left;
    return (x);
}
let moonX = getXOf(moon);
let planetX = getXOf(planet);
let distance = planetX - moonX;
let styles = window.getComputedStyle(moon); // figure out where moon is at any moment
let i = 0;
function animateMoon() {
    if(true){
        currentX = Math.floor(getXOf(moon));
        if (i === 0){
            startingX = getXOf(moon); // get value of X at beginning of orbit
        }
        i++;
        requestAnimationFrame(animate);
        let moonX = getXOf(moon);
        let planetX = getXOf(planet);
        let distance = Math.floor(planetX - moonX);
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

