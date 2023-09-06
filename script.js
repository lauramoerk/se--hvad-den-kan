let container1 = document.querySelector("#container1");
let container2 = document.querySelector("#container2");
let container3 = document.querySelector("#container3");
let container4 = document.querySelector("#container4");
let container5 = document.querySelector("#container5");
let container6 = document.querySelector("#container6");
let container7 = document.querySelector("#container7");
let container8 = document.querySelector("#container8");
let container9 = document.querySelector("#container9");
let container10 = document.querySelector("#container10");

let containers = [container1,container2,container3,container4,container5,container6,container7,container8,container9,container10];
// check containers in log
console.log(containers);

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}
function generateRandomAnimation(){
    return Math.floor(Math.random() * 3)
}

function initializeSprites(){
for(let i = 0; i < containers.length; i++){
//add fallDown class
containers[i].classList.add("fallDown" + generateRandomAnimation());
// add random position
containers[i].classList.add("position" + generateRandomNumber());
}
}

initializeSprites();






// Initialize all sprites
// container1.classList.add("fallDown2");
// container1.classList.add("position5");
// container2.classList.add("fallDown3");
// container2.classList.add("position6");
// container3.classList.add("fallDown2");
// container3.classList.add("position2");
// container4.classList.add("fallDown");
// container4.classList.add("position1");
// container5.classList.add("fallDown3");
// container5.classList.add("position4");
// container6.classList.add("fallDown2");
// container6.classList.add("position3");
// container7.classList.add("fallDown2");
// container7.classList.add("position8");
// container8.classList.add("fallDown");
// container8.classList.add("position7");
// container9.classList.add("fallDown");
// container9.classList.add("position10");
// container10.classList.add("fallDown3");
// container10.classList.add("position9");
