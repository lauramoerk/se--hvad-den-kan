
// make array of containers
let point = 0;
let containers = document.querySelectorAll('.container')

// check containers in log
// console.log(containers);

// use math-operator to generate random positions
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}
function generateRandomAnimation(){
    return Math.floor(Math.random() * 4);
}

//make function to initializa sprites

function initializeSprites(){
for(let i = 0; i < containers.length; i++){
//add random fallDown class
containers[i].classList.add("fallDown" + generateRandomAnimation());
// add random position
containers[i].classList.add("position" + generateRandomNumber());
containers[i].addEventListener("click" , fadeOut);
containers[i].addEventListener("click" , clickedEl);
}
}

initializeSprites();
// add fade animation when sprites are clicked
 
function fadeOut(e){
 //add random fallDown class
 e.target.classList.add('fading');

}

// add points
function clickedEl(){
point++;
pointCounter();
}

// points
function pointCounter(){ 
    document.querySelector("#scoretext").innerHTML = point +" / 10";
}

