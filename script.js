
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

// start game
document.getElementById('titlescreen').classList.remove('hidden');
document.getElementById('startbutton').addEventListener("click" , hideTitle)

function hideTitle(){
    document.getElementById('titlescreen').classList.add('hidden');
    document.getElementById('startbutton').classList.add('hidden');
    initializeSprites;
}



//make function to initializa sprites

function initializeSprites(){
    document.getElementById('winscreen').classList.add("hidden");
    document.getElementById('playbutton').classList.add("hidden");

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
// }


// add fade animation when sprites are clicked
 
function fadeOut(e){
 //add random fallDown class
 e.target.classList.add('fading');

}

// add points
function clickedEl(){
point++;
pointCounter();
pointReached();
}

// make pointcounter go up
function pointCounter(){ 
    document.querySelector("#scoretext").innerHTML = point +" / 10";
    pointReached();
}

// stop pointcounter
function pointReached(){
    if (point >= 10){
        point = 0;
        document.getElementById('winscreen').classList.remove("hidden");
        document.getElementById('playbutton').classList.remove("hidden");
        document.getElementById('playbutton').addEventListener("click", restartGame);
    }
} 



function restartGame() {
    document.getElementById('winscreen').classList.add("hidden");
    document.getElementById('playbutton').classList.add("hidden");
};
