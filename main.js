const moon = document.getElementById('moon');
const planet = document.getElementById('planet');
function getXOf(body) { // use this to get position of moon and planet
    const rect = body.getBoundingClientRect();
    const x = rect.left;
    return (x);
}
function animate() {
    if(true){ // runs infinitely
        requestAnimationFrame(animate); // calling the function it's in as its callback
        let moonX = getXOf(moon);
        let planetX = getXOf(planet);
        let distance = Math.floor(planetX - moonX);
        if (distance > 100){
            moon.style.zIndex = '10';
        }
        if (distance < -175 ) {
            moon.style.zIndex = '-10';
        }
    }
}
animate();
