let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let ratDoorPath = "rat.svg";
let catHypnoDoorPath = "cat-hypno.svg";
let catLaptopDoorPath = "cat-laptop.svg";
let closedDoorPath = "door.svg"

let numClosedDoors = 3; 

let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isClicked = (door) => {
    if (door.src == closedDoorPath) {
      return false;
    } else {
      return true;
    }
  }
  
  const isRat = (door) => {
    if (door.src === ratDoorPath) {
      return true;
    } else {
      return false;
    }
  }
  
  const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
      gameOver('win');
    } else if (isRat(door)) {
      gameOver('lose');
}
  }

const randomRatDoorGenerator = () => {
    ratDoor = Math.floor(Math.random() * numClosedDoors);
    if (ratDoor === 0) {
       openDoor1 = ratDoorPath;
       openDoor2 = catHypnoDoorPath;
       openDoor3 = catLaptopDoorPath;
      } else if (ratDoor === 1) { 
        openDoor2 = ratDoorPath;
        openDoor1 = catHypnoDoorPath;
        openDoor3 = catLaptopDoorPath;
    } else { (ratDoor === 2) 
        openDoor3 = ratDoorPath;
        openDoor1 = catHypnoDoorPath;
        openDoor2 = catLaptopDoorPath;
      }
} 

door1.onclick = () => {
    if(currentlyPlaying && !isClicked(door1)) {
        door1.src = openDoor1;
        playDoor(door1);
    }
}

door2.onclick = () => {
    if(currentlyPlaying && !isClicked(door2)) {
        door2.src = openDoor2;
        playDoor(door2);
    }
}

door3.onclick = () => {
    if(currentlyPlaying && !isClicked(door3)) {
        door3.src = openDoor3;
        playDoor(door3);
    }
}

startButton.onclick = () => {
    startRound();
}

const startRound = () => {
  // Reset all the doors to be closed
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomRatDoorGenerator();
}

const gameOver = (str) => {
  if(str === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    getYourScore();
  } else {
    startButton.innerHTML = "Game over! Play again?"
    score = 0;
    currentStreak.innerHTML = score;
  }
  currentlyPlaying = false;
}

const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}


startRound();