const moon = document.getElementById('moon');
const planet = document.getElementById('planet');

function getPosition(body) { // use this to get position of moon and planet
    const rect = body.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    return (x);
}


let moonPos = getPosition(moon);
let planetPos = getPosition(planet);
let distance = planetPos - moonPos;

let stopAnimation = false;
let styles = window.getComputedStyle(moon); // figure out where moon is at any moment

// make text appear on the water (#reflection)
setTimeout(function(){
    document.getElementById('reflection').style.opacity = "1";
    document.getElementById('mahone').style.display = "block";
    document.getElementById('bay').style.display = "block";
    document.getElementById('mbwd-logo').style.display = "block";
    document.getElementById('web').style.display = "block";
    document.getElementById('design').style.display = "block";
}, 4000)


let i = 0;
function animate() {
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

animate();

